import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FileUpload } from 'src/app/models/file-upload-copie-cet';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  complet: boolean = true
  modal:boolean=false
  detail;

  public id: string;

  constructor(private fs: AngularFirestore, private route: ActivatedRoute,
    private storage: AngularFireStorage,) { }



  ngOnInit() {
    this.getById()
  }

  getById() {
    this.id = this.route.snapshot.paramMap.get('id');
    // ***********************************************µ
    this.fs.collection("personneMoraleDocuments").doc(this.id).valueChanges().subscribe((res) => {
      this.detail = res
      console.log("this.detail : ", this.detail);
      // ********************* algorithme image complet    **********************************
      if (this.detail.URSSAFRSIouMSA == ''
        || this.detail.UrlCopieCET == ''
        || this.detail.UrlCopieExtrait == ''
        || this.detail.UrlRIBIBANBIC == ''
        || this.detail.UrlassuranceRC == '') {
        this.complet = false

      }
      // ********************************************
    })
  }

  onModal(){
    console.log("hello /////");
    
    this.modal=false
  }
  

  // ************************   update URSSAFRSIouMSA ********************************************
  // ****************************************************************************************
  // ****************************************************************************************
  currentFileUploadURSSAFRSIouMSA
  selectedFilesURSSAFRSIouMSA
  actualUrlURSSAFRSIouMSA
  // ***********************************************************************
  private pushFileToStorageURSSAFRSIouMSA(fileUpload: FileUpload): Observable<number> {
    // const filePath = `${this.actualUrl}/${fileUpload.file.name}`;
    const filePath = `${"updateU"}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name
          console.log("this url courant : ", fileUpload.url);

          this.fs.doc(`personneMoraleDocuments/${this.id}`).update({ URSSAFRSIouMSA: fileUpload.url });
        });
      })
    ).subscribe();
    return uploadTask.percentageChanges();

  }

  updateURSSAFRSIouMSA(img: any) {
    console.log("img url :", img);
    this.actualUrlURSSAFRSIouMSA = img

  }
  selectFileURSSAFRSIouMSA(event): void {
    this.selectedFilesURSSAFRSIouMSA = event.target.files;

  }

  uploadURSSAFRSIouMSA(): void {
    const file = this.selectedFilesURSSAFRSIouMSA.item(0);
    this.selectedFilesURSSAFRSIouMSA = undefined;

    this.currentFileUploadURSSAFRSIouMSA = new FileUpload(file);
    this.pushFileToStorageURSSAFRSIouMSA(this.currentFileUploadURSSAFRSIouMSA).subscribe(
      
      error => {
        console.log(error);
      }
    );

    this.modal=true;

  }
  // ************************************************************************************
  // *************************************     update URSSAFRSIouMSA    ************************
  // ************************************************************************************








  // ************************   update UrlCopieCET ********************************************
  // ****************************************************************************************
  // ****************************************************************************************
  currentFileUploadUrlCopieCET
  selectedFilesUrlCopieCET
  actualUrlUrlCopieCET
  // ***********************************************************************
  private pushFileToStorageUrlCopieCET(fileUpload: FileUpload): Observable<number> {
    // const filePath = `${this.actualUrl}/${fileUpload.file.name}`;
    const filePath = `${"updateC"}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name
          console.log("this url courant : ", fileUpload.url);

          this.fs.doc(`personneMoraleDocuments/${this.id}`).update({ UrlCopieCET: fileUpload.url });
        });
      })
    ).subscribe();
    return uploadTask.percentageChanges();

  }

  updateUrlCopieCET(img: any) {
    console.log("img url :", img);
    this.actualUrlUrlCopieCET = img

  }
  selectFileUrlCopieCET(event): void {
    this.selectedFilesUrlCopieCET = event.target.files;

  }

  uploadUrlCopieCET(): void {
    const file = this.selectedFilesUrlCopieCET.item(0);
    this.selectedFilesUrlCopieCET = undefined;

    this.currentFileUploadUrlCopieCET = new FileUpload(file);
    this.pushFileToStorageUrlCopieCET(this.currentFileUploadUrlCopieCET).subscribe(
      error => {
        console.log(error);
      }
      
    );

    this.modal=true;

  }
  // ************************************************************************************
  // *************************************     update UrlCopieCET    ************************
  // ************************************************************************************










  // ************************   update UrlCopieExtrait ********************************************
  // ****************************************************************************************
  // ****************************************************************************************
  currentFileUploadExtrait
  selectedFilesExtrait
  actualUrlExtrait
  // ***********************************************************************
  private pushFileToStorageExtrait(fileUpload: FileUpload): Observable<number> {
    // const filePath = `${this.actualUrl}/${fileUpload.file.name}`;
    const filePath = `${"updateE"}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name
          console.log("this url courant : ", fileUpload.url);

          this.fs.doc(`personneMoraleDocuments/${this.id}`).update({ UrlCopieExtrait: fileUpload.url });
        });
      })
    ).subscribe();
    return uploadTask.percentageChanges();

  }

  updateExtrait(img: any) {
    console.log("img url :", img);
    this.actualUrlExtrait = img

  }
  selectFileExtrait(event): void {
    this.selectedFilesExtrait = event.target.files;

  }

  uploadExtrait(): void {
    const file = this.selectedFilesExtrait.item(0);
    this.selectedFilesExtrait = undefined;

    this.currentFileUploadExtrait = new FileUpload(file);
    this.pushFileToStorageExtrait(this.currentFileUploadExtrait).subscribe(
      error => {
        console.log(error);
      }
    );


    this.modal=true;
  }
  // ************************************************************************************
  // *************************************     update UrlCopieExtrait      ************************
  // ************************************************************************************






  // ************************   update updateRIBIBANBIC ********************************************
  // ****************************************************************************************
  // ****************************************************************************************
  currentFileUploadRIBIBANBIC
  selectedFilesRIBIBANBIC
  actualUrlRIBIBANBIC
  // ***********************************************************************
  private pushFileToStorageRIBIBANBIC(fileUpload: FileUpload): Observable<number> {
    // const filePath = `${this.actualUrl}/${fileUpload.file.name}`;
    const filePath = `${"updateR"}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name
          console.log("this url courant : ", fileUpload.url);

          this.fs.doc(`personneMoraleDocuments/${this.id}`).update({ UrlRIBIBANBIC: fileUpload.url });
        });
      })
    ).subscribe();
    return uploadTask.percentageChanges();

  }

  updateRIBIBANBIC(img: any) {
    console.log("img url :", img);
    this.actualUrlRIBIBANBIC = img

  }
  selectFileRIBIBANBIC(event): void {
    this.selectedFilesRIBIBANBIC = event.target.files;

  }

  uploadRIBIBANBIC(): void {
    const file = this.selectedFilesRIBIBANBIC.item(0);
    this.selectedFilesRIBIBANBIC = undefined;

    this.currentFileUploadRIBIBANBIC = new FileUpload(file);
    this.pushFileToStorageRIBIBANBIC(this.currentFileUploadRIBIBANBIC).subscribe(
      error => {
        console.log(error);
      }
    );

    this.modal=true;

  }
  // ************************************************************************************
  // *************************************     update UrlCopieRIBIBANBIC    ************************
  // ************************************************************************************







  // ************************   update updateassuranceRC ********************************************
  // ****************************************************************************************
  // ****************************************************************************************
  currentFileUploadassuranceRC
  selectedFilesassuranceRC
  actualUrlassuranceRC
  // ***********************************************************************
  private pushFileToStorageassuranceRC(fileUpload: FileUpload): Observable<number> {
    // const filePath = `${this.actualUrl}/${fileUpload.file.name}`;
    const filePath = `${"updateR"}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name
          console.log("this url courant : ", fileUpload.url);

          this.fs.doc(`personneMoraleDocuments/${this.id}`).update({ UrlassuranceRC: fileUpload.url });
        });
      })
    ).subscribe();
    return uploadTask.percentageChanges();

  }

  updateassuranceRC(img: any) {
    console.log("img url :", img);
    this.actualUrlassuranceRC = img

  }
  selectFileassuranceRC(event): void {
    this.selectedFilesassuranceRC = event.target.files;

  }

  uploadassuranceRC(): void {
    const file = this.selectedFilesassuranceRC.item(0);
    this.selectedFilesassuranceRC = undefined;

    this.currentFileUploadassuranceRC = new FileUpload(file);
    this.pushFileToStorageassuranceRC(this.currentFileUploadassuranceRC).subscribe(
      error => {
        console.log(error);
      }
    );

    this.modal=true;

  }
  // ************************************************************************************
  // *************************************     update UrlassuranceRC    ************************
  // ************************************************************************************









}