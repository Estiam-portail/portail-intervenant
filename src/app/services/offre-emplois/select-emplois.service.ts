import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SelectEmploisService {

  constructor(private fs: AngularFirestore) { }


  saveEmplois(emplois) {
    return this.fs.collection('emplois').add({
      title:emplois.title,
      datesModel:emplois.datesModel,
      duree:emplois.duree,
      description:emplois.description,
      programme:emplois.programme,

    })
  }
  // *********************************

  selectEmplois(){
    return this.fs.collection('emplois');
    
  }



}
