import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor() { }
  prenom;
  nom;
  genre;
  dateNaissance;
  lieuNaissance;
  adresse;
  ville;
  codePostale;
  telephone;
  email;

  
}
