import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators ,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { GetDocumentsTravailleurIndependantService } from 'src/app/services/get-documents-travailleur-independant.service';

@Component({
  selector: 'app-information-intervenant',
  templateUrl: './information-intervenant.component.html',
  styleUrls: ['./information-intervenant.component.css']
})
export class InformationIntervenantComponent implements OnInit {
  lespiecesDemande:boolean = false
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private router :Router, private getDocumentsTravailleurIndependantService:GetDocumentsTravailleurIndependantService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      genre: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        telephone: ['', Validators.required],
        Norganismeformation: ['', Validators.required],
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

    // this.gestionDocumentsService.documents.genre = this.registerForm.value.genre;
    // this.gestionDocumentsService.documents.nom = this.registerForm.value.firstName;
    // this.gestionDocumentsService.documents.prenom = this.registerForm.value.lastName
    // this.gestionDocumentsService.documents.telephone = this.registerForm.value.telephone
    // this.gestionDocumentsService.documents.email = this.registerForm.value.email,
    // this.gestionDocumentsService.documents.Norganismeformation = this.registerForm.value.Norganismeformation,
    // this.gestionDocumentsService.documents.bio = this.registerForm.value.biographie;
    // this.router.navigate(['CopieExtrait'])
    this.getDocumentsTravailleurIndependantService.documents.genre = this.registerForm.value.genre;
    this.getDocumentsTravailleurIndependantService.documents.nom = this.registerForm.value.firstName;
        this.getDocumentsTravailleurIndependantService.documents.prenom = this.registerForm.value.lastName
        this.getDocumentsTravailleurIndependantService.documents.telephone = this.registerForm.value.telephone
        this.getDocumentsTravailleurIndependantService.documents.email = this.registerForm.value.email,
        this.getDocumentsTravailleurIndependantService.documents.Norganismeformation = this.registerForm.value.Norganismeformation,
        this.getDocumentsTravailleurIndependantService.documents.biographie = this.registerForm.value.biographie;

        this.router.navigate(['travailleurIndependant/cv'])
    
}



onReset() {
    this.submitted = false;
    this.registerForm.reset();
}

  piecesDemande(){
    this.lespiecesDemande=true

  }
}
