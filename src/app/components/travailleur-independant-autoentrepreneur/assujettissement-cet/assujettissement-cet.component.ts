import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDocumentsTravailleurIndependantService } from 'src/app/services/get-documents-travailleur-independant.service';

@Component({
  selector: 'app-assujettissement-cet',
  templateUrl: './assujettissement-cet.component.html',
  styleUrls: ['./assujettissement-cet.component.css']
})
export class AssujettissementCetComponent implements OnInit {

  constructor(private router:Router,
  private getDocumentsTravailleurIndependantService :GetDocumentsTravailleurIndependantService) { }

  ngOnInit(): void {
  }

  onAssujettialACET(){

    this.router.navigate(['travailleurIndependant/AttestationImpots'])
  }

// non AssujettialACET *******************************************
  nonAssujettialACET(){
    this.getDocumentsTravailleurIndependantService.saveDocuments().then(()=>{
        console.log("saved is true ...");
        
      })
  }

}
