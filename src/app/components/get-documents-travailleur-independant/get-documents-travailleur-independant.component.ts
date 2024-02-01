import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-get-documents-travailleur-independant',
  templateUrl: './get-documents-travailleur-independant.component.html',
  styleUrls: ['./get-documents-travailleur-independant.component.css']
})
export class GetDocumentsTravailleurIndependantComponent implements OnInit {
  detai;
  documents:any;
  constructor(private fs: AngularFirestore,
    private router :Router ) { }
  ngOnInit(): void {
    this.getAllDocuments();
  }



  getAllDocuments(){
    this.fs.collectionGroup('entrepreneurDocuments')
    .snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data()  as {} })
          
        )
      )
    ).subscribe(data => {
      this.documents = data;
      console.log("hello ;;;; ", this.documents);
      
    });
  }


  async detail(uid:any){
    this.fs.collection("entrepreneurDocuments").doc("1KE97Lq5DUv1soK9DkH9").valueChanges().subscribe((res) => {
      this.detai = res
        console.log("this.detail : ", this.detai);
  })
}



onDetail(id:string){
  console.log("id est : ",id);
  this.router.navigate(['GetDocumentsTravailleurIndependantDetail/',id])
  
  }
  

}
