import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidat } from 'src/app/models/candidat.interface';
import { CandidatService } from 'src/app/services/candidat.service';

@Component({
  selector: 'app-identiy',
  templateUrl: './identiy.component.html',
  styleUrls: ['./identiy.component.css']
})
export class IdentiyComponent implements OnInit {

  constructor(private router: Router, private candidatService: CandidatService) { }

  ngOnInit(): void {
  }
  
  identity(f) {

    let data = f.value;
    this.candidatService.nom = data.nom;
    this.candidatService.prenom = data.prenom;
    this.candidatService.genre = data.genre;
    this.candidatService.dateNaissance = data.dateNaissance;
    this.candidatService.lieuNaissance = data.lieuNaissance;
    this.candidatService.adresse = data.adresse;
    this.candidatService.ville = data.ville;
    this.candidatService.codePostale = data.codePostale;
    this.candidatService.telephone = data.telephone;
    this.candidatService.email = data.email;


    this.router.navigate(['/activiteidentitiesuite']);
    
    
    console.log(this.candidatService.genre + this.candidatService.nom)
  }

}
