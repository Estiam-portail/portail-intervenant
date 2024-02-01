import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { FileUpload } from 'src/app/models/file-upload-copie-cet';
import { SelectEmploisService } from 'src/app/services/offre-emplois/select-emplois.service';

@Component({
  selector: 'app-select-emplois',
  templateUrl: './select-emplois.component.html',
  styleUrls: ['./select-emplois.component.css']
})
export class SelectEmploisComponent implements OnInit {
  tata
  documentData;
  snapForm!: FormGroup;
  constructor(private fs: AngularFirestore,
    private formBuilder:
      FormBuilder,
    private storage: AngularFireStorage,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.snapForm = this.formBuilder.group({
      nom: [null],
      prenom: [null],
      description: [null],
      // cv: [null],
    });

    this.selectEmplois()
  }

  selectEmplois() {
    this.fs.collection('emplois')
      .snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({ id: c.payload.doc.id, ...c.payload.doc.data() as {} })

          )
        )
      ).subscribe(data => {
        this.documentData = data;
        console.log("data docu : ", this.documentData);

      });
  }




  // ************************ CV ********************************************
  // ****************************************************************************************
  // ****************************************************************************************
  currentFileUploadUrlCV
  selectedFilesUrlCV
  actualUrlUrlCV
  cvUrl
  // ***********************************************************************
  private pushFileToStorageUrlCV(fileUpload: FileUpload): Observable<number> {
    // const filePath = `${this.actualUrl}/${fileUpload.file.name}`;
    const filePath = `${"cv"}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name
          this.cvUrl = fileUpload.url
          // this.fs.doc(`saveCandidat`).update({ cv: fileUpload.url });

          console.log("this this.urlcv courant : ", this.cvUrl);
        });
      })
    ).subscribe();
    return uploadTask.percentageChanges();

  }

  updateCV(img: any) {
    console.log("img url :", img);
    this.actualUrlUrlCV = img

  }
  selectFileCV(event): void {
    this.selectedFilesUrlCV = event.target.files;

  }

  uploadCV(): void {
    const file = this.selectedFilesUrlCV.item(0);
    // this.selectedFilesUrlCV = undefined;

    this.currentFileUploadUrlCV = new FileUpload(file);
    this.pushFileToStorageUrlCV(this.currentFileUploadUrlCV).subscribe(
      error => {
        console.log(error);
      }

    );

    // this.modal=true;
  }
  // ************************************************************************************
  // *************************************     update UrlCV    ************************
  // ************************************************************************************

  onSubmitForm(id: any) {

    console.log("id : ", id);
    console.log(this.snapForm.value);
    this.fs.collection('saveCandidat').add({
      uidCours: id,
      nom: this.snapForm.value.nom,
      prenom: this.snapForm.value.prenom,
      description: this.snapForm.value.description,
      cv: this.cvUrl,

    }).then(() => {
      console.log('Created new item successfully!');
    });

    this.uploadCV();

    console.log("test url cv", this.cvUrl);
  }

  // *****************************************************************************
  // *************     on show candidat ************************************

  onShowCandidat(uid: any) {
    this.router.navigateByUrl(`emplois/select-emplois/${uid}`);
  }


  onCandidat(uid: any) {
    this.router.navigateByUrl(`emplois/SendCandidat/${uid}`);
  }
  // ***************************************************************************
  // ***********************************************************************
  teste(id){
    this.tata = id
  }



}
