import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GestionDocumentsService } from '../../../services/personne-morale/gestion-documents.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-informations-intervenant',
  templateUrl: './informations-intervenant.component.html',
  styleUrls: ['./informations-intervenant.component.css']
})
export class InformationsIntervenantComponent implements OnInit {
  lespiecesDemande:boolean = false
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private gestionDocumentsService:GestionDocumentsService,
    
  private router:Router,
    ) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
        genre: ['', Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          telephone: ['', Validators.required],
          biographie: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
      }, {
          // validator: MustMatch('password', 'confirmPassword')
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      console.log("result ; ", this.registerForm.value);

      this.gestionDocumentsService.documents.genre = this.registerForm.value.genre;
      this.gestionDocumentsService.documents.nom = this.registerForm.value.firstName;
      this.gestionDocumentsService.documents.prenom = this.registerForm.value.lastName
      this.gestionDocumentsService.documents.telephone = this.registerForm.value.telephone
      this.gestionDocumentsService.documents.email = this.registerForm.value.email,
      this.gestionDocumentsService.documents.Norganismeformation = this.registerForm.value.Norganismeformation,
      this.gestionDocumentsService.documents.bio = this.registerForm.value.biographie;
      this.router.navigate(['CopieExtrait'])
      
  }


  
  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }



  leFormulaire(){
    this.lespiecesDemande = !this.lespiecesDemande
  }
  
}
