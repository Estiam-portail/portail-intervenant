import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FileUpload } from '../../models/file-upload-copie-extrait';
import { Router } from '@angular/router';
import { GestionDocumentsService } from './gestion-documents.service';
@Injectable({
  providedIn: 'root'
})
export class CopieExtraitService {
  private basePath = '/uploads';

  constructor(private db: AngularFireDatabase,
    private router : Router,
    private storage: AngularFireStorage
    ,private gestionDocumentsService :GestionDocumentsService
    ) { }

  pushFileToStorage(fileUpload: FileUpload): Observable<number> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload);

          this.gestionDocumentsService.documents.UrlCopieExtrait = fileUpload.url
        });
      })
    ).subscribe();

    this.router.navigate(['RibIbanBicComponent'])
    return uploadTask.percentageChanges();

  }

  private saveFileData(fileUpload: FileUpload): void {
    this.db.list(this.basePath).push(fileUpload);
  }

  getFiles(numberItems): AngularFireList<FileUpload> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
            
  }

  deleteFile(fileUpload: FileUpload): void {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }

   deleteFileDatabase(key: string): Promise<void> {
    return this.db.list(this.basePath).remove(key);
  }

  // delete function **************************************************************
   deleteFileStorage(name: string): void {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
    console.log('success delete ..');
    
  }

    // test update  function **************************************************************
    UpdateFileStorage(name: string): void {
      this.storage;
      console.log('success delete ..');
      
    }

}
