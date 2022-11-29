import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { ResultatsService } from 'src/app/services/resultats.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
//  uid 
 object
  constructor(private fs: AngularFirestore,
    public db: AngularFireDatabase,
    private resultService: ResultatsService,
     private afauth: AngularFireAuth) 
  { 
    // this.afauth.user.subscribe(user=>{
    //   this.uid = user.uid
    // })
    
  }

  diag
  ngOnInit(): void {
    this.getAll()
  }


    //**********************      delete element *******************************/
    delete(id: string) {
      this.resultService.delete(id);
    }


  getUserData(uid){
    this.fs.collection('users')
      .doc(uid).valueChanges().subscribe(val =>{ 
        this.object= val
        console.log(this.object.firstName);
      });
  }


  getAll(){
    this.fs.collection('resultat').snapshotChanges().subscribe(data => {
      this.diag = data.map(e => {
        return {
          id: e.payload.doc.id,

          EE: e.payload.doc.data()['EE'],
          CO: e.payload.doc.data()['CO'],
          Calcul: e.payload.doc.data()['Calcul'],
          CE: e.payload.doc.data()['CE'],
          EO: e.payload.doc.data()['EO'],
          REspace: e.payload.doc.data()['REspace'],
          RTemps: e.payload.doc.data()['RTemps'],
          Numerique: e.payload.doc.data()['Numerique'],

          nom: e.payload.doc.data()['nom'],
          prenom: e.payload.doc.data()['prenom'],
          myDate: e.payload.doc.data()['myDate'],
          genre: e.payload.doc.data()['genre'],
          uid: e.payload.doc.data()['uid'],
        };
        
      })
    });
  }

}
