import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CompteurService {
  // compteur : umber = 0
  compt:number = 0
  compteur:number = 0;

  
  constructor() { 
    localStorage.setItem('tata',JSON.stringify(this.compteur))
    this.compteur = JSON.parse(localStorage.getItem('tata'))
    
  }
 


}