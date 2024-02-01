import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GestionDocumentsService {

  documents:any={
    genre:'',
    nom:'',
    prenom:'',
    email:'',
    telephone:'',
    bio:'',
    UrlCopieExtrait:'',
    UrlRIBIBANBIC:'',
    UrlCopieCET:'',
    UrlassuranceRC :'',
    URSSAFRSIouMSA :'',

  }

  constructor(private fs: AngularFirestore) { }
 
  saveDocuments(){
    console.log('a envoyer to DB : ', this.documents);
    
    return this.fs.collection('personneMoraleDocuments').add({
      genre:this.documents.genre,
      nom:this.documents.nom,
      prenom:this.documents.prenom,
      email:this.documents.email,
      biographie:this.documents.bio,
      telephone:this.documents.telephone,
      UrlCopieExtrait:this.documents.UrlCopieExtrait,
      UrlRIBIBANBIC:this.documents.UrlRIBIBANBIC,
      UrlCopieCET:this.documents.UrlCopieCET,
      UrlassuranceRC:this.documents.UrlassuranceRC,
      URSSAFRSIouMSA:this.documents.URSSAFRSIouMSA,
    });
  }


  getAllDocuments() {
    return this.fs.collection('personneMoraleDocuments',ref=>ref.orderBy('myDate','asc')).snapshotChanges();
  }



}
