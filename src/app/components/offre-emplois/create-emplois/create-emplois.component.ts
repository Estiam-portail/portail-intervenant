import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-emplois',
  templateUrl: './create-emplois.component.html',
  styleUrls: ['./create-emplois.component.css']
})
export class CreateEmploisComponent implements OnInit {
  productsRef
  constructor(private fs: AngularFirestore,private router: Router) {
    this.productsRef = this.fs.collection('emplois');
   }

  ngOnInit(): void {
  }

  CreateEmplois(data){
    this.productsRef.add(data).then( res =>{
        this.router.navigate(['emplois/select-emplois']);
      } );
  


  }



}
