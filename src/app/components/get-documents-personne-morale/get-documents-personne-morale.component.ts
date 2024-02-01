import { Component, Input, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { FileUpload } from 'src/app/models/file-upload-copie-extrait';
import { CopieExtraitService } from 'src/app/services/personne-morale/copie-extrait.service';

@Component({
  selector: 'app-get-documents-personne-morale',
  templateUrl: './get-documents-personne-morale.component.html',
  styleUrls: ['./get-documents-personne-morale.component.css']
})
export class GetDocumentsPersonneMoraleComponent implements OnInit {
  fileUploads;
  documents: any;
  constructor(private fs: AngularFirestore, 
    private copieExtraitService: CopieExtraitService ,
    private router:Router
    ) { }
  @Input() fileUpload: FileUpload;
  ngOnInit(): void {
    this.getAllDocuments();
  }



  getAllDocuments() {
    this.fs.collection('personneMoraleDocuments')
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


// **************************************
onDetail(id:string){
console.log("id est : ",id);
this.router.navigate(['GetDocumentsPersonneMoraleDetail/',id])

}

}
