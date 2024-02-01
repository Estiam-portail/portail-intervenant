import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FileUploadRibIbanBic } from '../../models/file-upload-rib-iban-bic';
import { GestionDocumentsService } from './gestion-documents.service';
@Injectable({
  providedIn: 'root'
})
export class RibIbanBicService {

  private basePath = '/uploads';

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage
    ,private gestionDocumentsService :GestionDocumentsService
    ) { }

  pushFileToStorage(FileUploadRibIbanBic: FileUploadRibIbanBic): Observable<number> {
    const filePath = `${this.basePath}/${FileUploadRibIbanBic.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, FileUploadRibIbanBic.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          FileUploadRibIbanBic.url = downloadURL;
          FileUploadRibIbanBic.name = FileUploadRibIbanBic.file.name;
          this.saveFileData(FileUploadRibIbanBic);

          this.gestionDocumentsService.documents.UrlRIBIBANBIC = FileUploadRibIbanBic.url

          console.log('url iban bic ',FileUploadRibIbanBic.url);
          

        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  private saveFileData(FileUploadRibIbanBic: FileUploadRibIbanBic): void {
    this.db.list(this.basePath).push(FileUploadRibIbanBic);
  }

  getFiles(numberItems): AngularFireList<FileUploadRibIbanBic> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }

  deleteFile(FileUploadRibIbanBic: FileUploadRibIbanBic): void {
    this.deleteFileDatabase(FileUploadRibIbanBic.key)
      .then(() => {
        this.deleteFileStorage(FileUploadRibIbanBic.name);
      })
      .catch(error => console.log(error));
  }

  private deleteFileDatabase(key: string): Promise<void> {
    return this.db.list(this.basePath).remove(key);
  }

  private deleteFileStorage(name: string): void {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }
  
}
