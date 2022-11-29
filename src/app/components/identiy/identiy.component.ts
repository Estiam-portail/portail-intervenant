import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultatsService } from 'src/app/services/resultats.service';

@Component({
  selector: 'app-identiy',
  templateUrl: './identiy.component.html',
  styleUrls: ['./identiy.component.css']
})
export class IdentiyComponent implements OnInit {
  
 nom;
 prenom ;
    genre ;
    telephone;
    email;
    codePostale;
    lieuNaissance ;
    dateNaissance;
    adresse;
    ville;
    metier;
    status;
    autre;
    derniereEmploi;
    dateEmploi;
  constructor(private router: Router, public resultService: ResultatsService,) {
   this.nom = localStorage.getItem('nom')
    this.prenom = localStorage.getItem('prenom'),
    this.genre = localStorage.getItem('genre'),
    this.telephone= localStorage.getItem('telephone'),
    this.email= localStorage.getItem('email'),
    this.codePostale= localStorage.getItem('codePostale'),
    this.lieuNaissance = localStorage.getItem('lieuNaissance'),
    this.dateNaissance =  localStorage.getItem('dateNaissance'),
    this.adresse = localStorage.getItem('adresse'),
    this.ville = localStorage.getItem('ville'),
    this.metier = localStorage.getItem('metier'),
    this.status =localStorage.getItem('status')
    this.autre =localStorage.getItem('autre')
    this.derniereEmploi =localStorage.getItem('derniereEmploi')
    this.dateEmploi =localStorage.getItem('dateEmploi')
  }

  ngOnInit(): void {
  }
  
  identity(f) {

    let data = f.value;
    this.resultService.nom = data.nom;
    localStorage.setItem('nom',data.nom)

    this.resultService.prenom = data.prenom;
    localStorage.setItem('prenom',data.prenom)

    this.resultService.genre = data.genre;
    localStorage.setItem('genre',data.genre)

    this.resultService.telephone= data.telephone;
    localStorage.setItem('telephone',data.telephone)

    this.resultService.email = data.email;
    localStorage.setItem('email',data.email)

    this.resultService.codePostale = data.codePostale;
    localStorage.setItem('codePostale',data.codePostale)

    this.resultService.lieuNaissance = data.lieuNaissance;
    localStorage.setItem('lieuNaissance',data.lieuNaissance)

    this.resultService.dateNaissance= data.dateNaissance;
    localStorage.setItem('dateNaissance',data.dateNaissance)

   this.resultService.date = new Date();

   this.resultService.status=data.status;
   localStorage.setItem('status',data.status)
   localStorage.setItem('adresse',data.adresse)
   localStorage.setItem('ville',data.ville)
   localStorage.setItem('metier',data.metier)
   localStorage.setItem('status',data.status)
   localStorage.setItem('autre',data.autre)
   localStorage.setItem('derniereEmploi',data.derniereEmploi)
   localStorage.setItem('dateEmploi',data.dateEmploi)
   

    console.log("date de naissance : " + this.resultService.dateNaissance)
    console.log("date de evalutionDate : " + this.resultService.date)

    this.router.navigate(['/activiteidentitesuite']);
    
  }


  buck(){
    this.router.navigate(['/activiteidentite']);
  }

}
