import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { FileUpload } from 'src/app/models/file-upload-copie-cet';


@Component({
  selector: 'app-selectiby-uid',
  templateUrl: './selectiby-uid.component.html',
  styleUrls: ['./selectiby-uid.component.css']
})
export class SelectibyUidComponent implements OnInit {
  ValiderLeCv:boolean = false;
  success:boolean=false;
  error:boolean=false
  successDelete:boolean=false
res
resp
uid: string;
id;
updateNewData={
  title:'',
  duree:'',
  datesModel:'',
  programme:'',
  description:''
}
documentData;
  snapForm!: FormGroup;
  adminUid
  constructor(private fs: AngularFirestore,
    private formBuilder:
      FormBuilder,
    private storage: AngularFireStorage
    ,private route: ActivatedRoute, private router: Router) {
  this.id = this.route.snapshot.paramMap.get('id');
   // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
      this.adminUid = localStorage.getItem("adminUid")
  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  console.log("hello admin : ", this.adminUid);
  
}

ngOnInit(): void {
 this.getObjectById()
 this.selectemploisByUid(this.id);

 this.snapForm = this.formBuilder.group({
  nom: [null],
  prenom: [null],
  description: [null],
  // cv: [null],
});

this.selectEmplois()
  
}

getObjectById() { 
  // *********************************************************
  this.fs.collection('emplois').doc(this.id).snapshotChanges().subscribe(
    res => {
      this.res= { id: res.payload.id, ...res.payload.data() as {} };
      // console.log("res :  ,, ", this.res );
      
    },
    err => {
      console.debug(err);
    }
  )
  // ***************************************************************
 
}
  // ***************************************************************************
  // *****************************  get emplois   ******************************************

selectemploisByUid(id: string){
   this.fs.collection('saveCandidat', ref => ref.where('uidCours', '==', id))
  .snapshotChanges().pipe(
    map(changes =>
      changes.map(c =>
        ({ id: c.payload.doc.id, ...c.payload.doc.data()  as {} })
        
      )
    )
  ).subscribe(data => {
    this.resp = data;
    console.log("mon amie est  ;;;; ", this.resp);
    
  });
    
}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
edit(res){
  this.updateNewData=res
}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
delet(id){
  // Specify the document path
const documentPath = 'emplois/'+id;

// Delete the document
this.fs.doc(documentPath).delete()
  .then(() => {
    this.successDelete =true

    // setTimeout('', 15000);
    this.router.navigate(['emplois/select-emplois']);
  })
  .catch((error) => {
    console.error('Error deleting document: ', error);
  });
}
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
updateDta(){
  // Specify the document path
const documentPath = 'emplois/'+this.id;

// Specify the update data
const newData = { fieldToUpdate: 'new value' };

// Update the document
this.fs.doc(documentPath).update(this.updateNewData)
  .then(() => {
    console.log('Document successfully updated!');
    this.success = true
  })
  .catch((error) => {
    console.error('Error updating document: ', error);
    this.error = true
  });



 

}


validCv(){
  this.ValiderLeCv = true;
}




















// ***************************************












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
  // teste(id){
  //   this.tata = id
  // }


















}
