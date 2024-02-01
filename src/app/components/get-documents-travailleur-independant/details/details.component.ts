import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  detail;
  complet:boolean=true
  public id: string;

  constructor(private fs: AngularFirestore, private route: ActivatedRoute) { }



  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    // ***********************************************
    this.fs.collection("entrepreneurDocuments").doc(this.id).valueChanges().subscribe((res) => {
      this.detail = res
      console.log("this.detail : ", this.detail);
    })

    // ******************************************
  }









}
