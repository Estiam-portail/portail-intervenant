import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Resultat } from '../models/resultats.interface';

@Injectable({
  providedIn: 'root'
})
export class ResultatsService {

  FINALCE;
  FINALEE;
  FINALCO;
  FINALEO;
  FINALCalcul;
  FINALREspace;
  FINALRTemps;
  FINALNumerique;

  CE: number = 0;
  EE: number = 0;
  CO: number = 0;
  EO: number = 0;
  Calcul: number = 0;
  REspace: number = 0;
  RTemps: number = 0;
  Numerique: number = 0;

  genre;
  prenom;
  nom;
  date;
  telephone;
  email;
  codePostale;
  lieuNaissance;
  dateNaissance;
  status;
  emailaccompagnateur;
  nomaccompagnateur;

  // les quetions et leur valeur
  // questionUn:string;


  constructor(private afauth: AngularFireAuth, private fs: AngularFirestore) {

  }

  result(results: Resultat) {
    return this.fs.collection('resultat').add(results)
  }

  getAllDiagnistiques() {
    return this.fs.collection('resultat',ref=>ref.orderBy('myDate','asc')).snapshotChanges();
  }

  delete(id: string) {
    this.fs.doc('resultat/' + id).delete();
  }

  async getDiagnostiqueById(id: string) {
    const e = await this.fs.collection('resultat')
      .doc(id).get()
    return e
  }

  getObjectById(id) {
    return this.fs.collection('resultat')
      .doc(id)
      .ref;
  }



}
