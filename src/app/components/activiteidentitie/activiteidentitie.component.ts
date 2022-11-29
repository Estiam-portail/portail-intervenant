import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompteurService } from 'src/app/services/compteur.service';
import { ResultatsService } from 'src/app/services/resultats.service';

@Component({
  selector: 'app-activiteidentitie',
  templateUrl: './activiteidentitie.component.html',
  styleUrls: ['./activiteidentitie.component.css']
})
export class ActiviteidentitieComponent implements OnInit {
  compteur ;
  compt :number= 0
  rensform1: boolean = false;
  rensform2: boolean = false;
  questionhuit:boolean = false;
  // **************************************
  compteurquestionSix;
  compteurquestionSept
  compteurquestionHuit
  compteurquestionNeuf
  // *********************************************
  quesix;
  quessept;
  queshuit;
  quesneuf
  // ****************************************
  constructor(private resultService: ResultatsService,
    public comptService : CompteurService, private router: Router) {
    this.quesix = localStorage.getItem("valeurQuestionsix")
    this.quessept = localStorage.getItem("valeurQuestionsept")
    this.queshuit = localStorage.getItem("valeurQuestionhuit")
    this.quesneuf = localStorage.getItem("valeurQuestionneuf")


    this.compteur = localStorage.getItem('compt')
   }
 
  ngOnInit(): void {
  }

// ***********************************************************
handleChangequesSix(evt) {
  if(this.compteurquestionSix>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionSix = 1
  }
}
  handleChangequesSept(evt) {
    if(this.compteurquestionSept>0){
      this.compt = this.compt
    }
    else{
      this.compt = this.compt+1
      this.compteurquestionSept = 1
    }
  }
    handleChangequesHuit(evt) {
      if(this.compteurquestionHuit>0){
        this.compt = this.compt
      }
      else{
        this.compt = this.compt+1
        this.compteurquestionHuit = 1
      }
    } 
    handleChangequesNeuf(evt) {
      if(this.compteurquestionNeuf>0){
        this.compt = this.compt
      }
      else{
        this.compt = this.compt+1
        this.compteurquestionNeuf = 1
      }
    } 

// ***********************************************************

  handleChange(evt) {
    var target = evt.target;
    if (target.checked) {
      this.rensform1 = true
      this.rensform2 = false;
    }
  }

  handleChangenon(evt) {
    var target = evt.target;
    if (target.checked) {
      this.rensform2 = true
      this.rensform1 = false
    }
  }

  questionhuite(evt) {
    var target = evt.target;
    if (target.checked) {
      this.questionhuit=true
    }
  }

  questionhuitenon(evt) {
    var target = evt.target;
    if (target.checked) {
      this.questionhuit=false
    }
  }

  selectednon() {
    this.rensform2 = true
  }

  activiteidentitie(f) {
    let data = f.value
    /***********   question six algo  ********** */
    if (data.quesix == "oui") {
      this.resultService.Numerique = this.resultService.Numerique + 1
      this.quesix = "oui"
    } else {
      this.resultService.Numerique = this.resultService.Numerique + 0
      this.quesix = "non"
    }
    /***********  fin question six algo  ********** */

    /***********   question sept algo  ********** */
    if (data.quessept == "oui") {
      this.resultService.Numerique = this.resultService.Numerique + 2;
      this.quessept = "oui"
    } else if (data.quesdeux == "ouienpartie") {
      this.resultService.Numerique = this.resultService.Numerique + 1;
      this.quessept = "ouienpartie"
    } else {
      this.resultService.Numerique = this.resultService.Numerique + 0;
      this.quessept = "non"
    }
    /***********  fin question cept algo  ********** */

    /***********   question huit algo  ********** */
    if (data.queshuit == "oui") {
      this.resultService.Numerique = this.resultService.Numerique + 3;
      this.queshuit = "oui"
    } else {
      this.resultService.Numerique = this.resultService.Numerique + 0;
      this.queshuit = "non"
    }
    /***********  fin question huit algo  ********** */

    /***********   question neuf algo  ********** */
    if (data.quesneuf == "oui") {
      this.resultService.Numerique = this.resultService.Numerique + 1;
      this.quesneuf = "oui"
      this.rensform1 = true;

    } else if (data.quesneuf == "ouienpartie") {
      this.resultService.Numerique = this.resultService.Numerique + 0,5;
      this.queshuit = "ouienpartie"
    } else {
      this.resultService.Numerique = this.resultService.Numerique + 0;
      this.queshuit = "non"
    }
    /***********  fin question neuf algo  ********** */

    localStorage.setItem("questionSix", data.quesix);
    localStorage.setItem("questionSept", data.quessept);
    localStorage.setItem("questionHuit", data.queshuit);
    localStorage.setItem("questionNeuf", data.quesneuf);


    
    let compteur = +localStorage.getItem('compt') + +this.compt;
    localStorage.setItem('compt',JSON.stringify(compteur));
    // this.compteur = localStorage.getItem('compt')
    // this.comptService.compteur = +(this.comptService.compteur) + +(this.compt)

    this.router.navigate(['/identity']);

  localStorage.setItem("valeurQuestionsix", this.quesix)
  localStorage.setItem("valeurQuestionsept", this.quessept)
  localStorage.setItem("valeurQuestionhuit", this.queshuit)
  localStorage.setItem("valeurQuestionneuf", this.quesneuf)



  


  }


  buck(){
    this.router.navigate(['/fichierAudio']);
  }

}
