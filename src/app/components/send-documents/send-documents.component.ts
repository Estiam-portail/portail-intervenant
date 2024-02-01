import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-documents',
  templateUrl: './send-documents.component.html',
  styleUrls: ['./send-documents.component.css']
})
export class SendDocumentsComponent implements OnInit {

  constructor(private router: Router){

  }
  ngOnInit(): void {
  }

  sendPersonneNormalDocuments(){
    this.router.navigate(['InformationsIntervenant'])
    
  }


  sendTravailleurIndependantDocuments(){
    this.router.navigate(['travailleurIndependant/InformationIntervenant'])
    
  }

  

}
