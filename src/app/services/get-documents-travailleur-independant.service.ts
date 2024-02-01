import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GetDocumentsTravailleurIndependantService {


  documents:any={
    genre:'',
    nom:'',
    prenom:'',
    email:'',
    telephone:'',
    biographie:'',
    Norganismeformation:'',
    UrlAssujettissement:'',
    UrlAttestationPrecisant:'',
    UrlAssestationURSAFRSI:'',
    UrlIdentitie :'',
    UrlCarteVital :'',
    UrlCopiecet:'',
    UrlCV :'',
    UrlExtraitCAsierJudiciaire :'',
    UrlOrdreProfessionnel :'',
    UrlOrganismeFormation:'',
    UrlAttestationAssurance:'',
    UrlRIBIBAN:'',

  }

  constructor(private fs: AngularFirestore) { }
 
  saveDocuments(){
    return this.fs.collection('entrepreneurDocuments').add({
      genre:this.documents.genre,
      nom:this.documents.nom,
      prenom:this.documents.prenom,
      email:this.documents.email,
      telephone:this.documents.telephone,
      biographie:this.documents.biographie,
      Norganismeformation:this.documents.Norganismeformation,
      UrlAssujettissement:this.documents.UrlAssujettissement,
      UrlAttestationPrecisant:this.documents.UrlAttestationPrecisant,
      UrlAssestationURSAFRSI:this.documents.UrlAssestationURSAFRSI,
      UrlIdentitie:this.documents.UrlIdentitie,
      UrlCarteVital:this.documents.UrlCarteVital,
      UrlCopiecet:this.documents.UrlCopiecet,
      UrlCV:this.documents.UrlCV,
      UrlExtraitCAsierJudiciaire:this.documents.UrlExtraitCAsierJudiciaire,
      UrlOrganismeFormation:this.documents.UrlOrganismeFormation,
      UrlOrdreProfessionnel:this.documents.UrlOrdreProfessionnel,
      UrlAttestationAssurance:this.documents.UrlAttestationAssurance,
      UrlRIBIBAN:this.documents.UrlRIBIBAN,
    });
  }


  getAllDocuments() {
    return this.fs.collection('entrepreneurDocuments',ref=>ref.orderBy('myDate','asc')).snapshotChanges();
  }
}
