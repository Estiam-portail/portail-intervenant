import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultatsService } from 'src/app/services/resultats.service';

@Component({
  selector: 'app-identiy',
  templateUrl: './identiy.component.html',
  styleUrls: ['./identiy.component.css']
})
export class IdentiyComponent implements OnInit {
  
  constructor(private router: Router, public resultService: ResultatsService,) { }

  ngOnInit(): void {
  }
  
  identity(f) {

    let data = f.value;
    this.resultService.nom = data.nom;
    this.resultService.prenom = data.prenom;
    this.resultService.genre = data.genre;

    this.resultService.telephone= data.telephone;
    this.resultService.email = data.email;
    this.resultService.codePostale = data.codePostale;
    this.resultService.lieuNaissance = data.lieuNaissance;
    this.resultService.dateNaissance= data.dateNaissance;
   this.resultService.date = new Date();
   this.resultService.status=data.status;


    console.log("date de naissance : " + this.resultService.dateNaissance)
    console.log("date de evalutionDate : " + this.resultService.date)

    this.router.navigate(['/activiteidentitesuite']);
    
  }

}
