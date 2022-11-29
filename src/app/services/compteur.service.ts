import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CompteurService {
  compteur:number = 0;

  
  constructor() { 
    this.getComteur()
    this.compteur = JSON.parse(localStorage.getItem('tata'))
    
  }
 
  getComteur(){
  localStorage.setItem('tata',JSON.stringify(this.compteur))
  }

}