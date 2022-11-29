import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resultat } from 'src/app/models/resultats.interface';
import { CompteurService } from 'src/app/services/compteur.service';
import { ResultatsService } from 'src/app/services/resultats.service';

@Component({
  selector: 'app-offre-demploi',
  templateUrl: './offre-demploi.component.html',
  styleUrls: ['./offre-demploi.component.css']
})
export class OffreDemploiComponent implements OnInit {
  compteur
  compteurquestionTrentecenq
  compteurquestionTrentesix
  compteurquestionTrentesept
  compteurquestionTrentehuit
  compteurquestionTrenteneuf
  compteurquestionQuarante
  compt=0

  DCE
  DCO;
  DCalcul;
  DEE;
  DEO
  DNumerique
  DREspace
  DRTemps


  month = new Date().getUTCMonth() + 1;
  day = new Date().getUTCDate();
  year = new Date().getUTCFullYear();

  // *****************************
  questrentecenque
  questrentesix
  questrentecepte
  questrentehuite
  questrenteneuf
  quesquarante
  // *****************************

  constructor(private resultService: ResultatsService,public comptService : CompteurService,
    private router: Router
  ) {
// *******************************

this.questrentecenque= localStorage.getItem("questiontrentecenque")
this.questrentesix = localStorage.getItem("questrentesix")
this.questrentecepte =  localStorage.getItem("questrentecepte")
this.questrentehuite =  localStorage.getItem("questrentehuite")
this.questrenteneuf=  localStorage.getItem("questrenteneuf")
this.quesquarante = localStorage.getItem("quesquarante")
// *********************************
this.compteur = localStorage.getItem('compt')
  }

  resultats: Resultat;


  ngOnInit(): void {
  }


// *******************************************
handleChangequesTrentecenq(evt){
  if(this.compteurquestionTrentecenq>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionTrentecenq = 1
  }
}
handleChangequesTrentesix(evt){
  if(this.compteurquestionTrentesix>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionTrentesix = 1
  }
}
handleChangequesTrentesept(evt){
  if(this.compteurquestionTrentesept>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionTrentesept = 1
  }
}
handleChangequesTrentehuit(evt){
  if(this.compteurquestionTrentehuit>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionTrentehuit = 1
  }
}
handleChangequesTrenteneuf(evt){
  if(this.compteurquestionTrenteneuf>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionTrenteneuf = 1
  }
}
handleChangequesQuarante(evt){
  if(this.compteurquestionQuarante>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionQuarante = 1
  }
}
// ************************************************


  offreDemploi(f) {
    let data = f.value
    /***********   question 35 algo  ********** */
    if (data.questrentecenque == "oui") {
      this.resultService.CE = this.resultService.CE + 2;
      this.resultService.Calcul = this.resultService.Calcul + 2;
      this.resultService.RTemps = this.resultService.RTemps + 2;
      this.questrentecenque = "oui"
    } else if (data.questrentecenque == "ouienpartie") {
      this.resultService.CE = this.resultService.CE + 2;
      this.resultService.Calcul = this.resultService.Calcul + 0;
      this.resultService.RTemps = this.resultService.RTemps + 1;
      this.questrentecenque = "ouienpartie"
    } else {
      this.resultService.CE = this.resultService.CE + 0;
      this.resultService.Calcul = this.resultService.Calcul + 0;
      this.questrentecenque = "non"
    }
    /***********  fin question 35 algo  ********** */

    /***********   question  36 algo  ********** */
    if (data.questrentesix == "oui") {
      this.resultService.CE = this.resultService.CE + 3;
      this.questrentesix = "oui"
    } else if (data.questrentesix == "ouienpartie") {
      this.resultService.CE = this.resultService.CE + 1, 5;
      this.questrentesix = "ouienpartie"
    } else {
      this.resultService.CE = this.resultService.CE + 0;
      this.questrentesix = "non"
    }
    /***********  fin question  36  algo  ********** */


    /***********   37 algo  ********** */
    if (data.questrentecepte == "oui") {
      this.resultService.Calcul = this.resultService.Calcul + 5;
      this.questrentecepte = "oui"
    } else {
      this.resultService.Calcul = this.resultService.Calcul + 0;
      this.questrentecepte = "non"
    }
    /***********  fin 37 algo  ********** */


    /***********   38 algo  ********** */
    if (data.questrentehuite == "oui") {
      this.resultService.CE = this.resultService.CE + 3;
      this.questrentehuite = "oui"
    } else if (data.questrentehuite == "ouienpartie") {
      this.resultService.CE = this.resultService.CE + 1, 5;
      this.questrentehuite = "ouienpartie"
    } else {
      this.resultService.CE = this.resultService.CE + 0;
      this.questrentehuite = "non"
    }
    /***********  fin 38 algo  ********** */

    /***********   39 algo  ********** */
    if (data.questrenteneuf == "oui") {
      this.resultService.EE = this.resultService.EE + 4;
      this.questrenteneuf = "oui"
    } else if (data.questrenteneuf == "ouienpartie") {
      this.resultService.EE = this.resultService.EE + 2;
      this.questrenteneuf = "ouienpartie"
    } else {
      this.resultService.EE = this.resultService.EE + 0;
      this.questrenteneuf = "non"
    }
    /***********  fin 39 algo  ********** */

    /***********   ques 40 algo  ********** */
    if (data.quesquarante == "oui") {
      this.resultService.EE = this.resultService.EE + 2;
      this.quesquarante = "oui"
    } else if (data.questrenteneuf == "ouienpartie") {
      this.resultService.EE = this.resultService.EE + 1;
      this.quesquarante = "ouienpartie"
    } else {
      this.resultService.EE = this.resultService.EE + 0;
      this.quesquarante = "non"
    }
    /***********  fin ques 40 algo  ********** */


    localStorage.setItem("questionTrentecenque", data.questrentecenque);
    localStorage.setItem("questionTrentesix", data.questrentesix)
    localStorage.setItem("questionTrentecepte", data.questrentecepte)
    localStorage.setItem("questionTrentehuite", data.questrentehuite)
    localStorage.setItem("questionTrenteneuf", data.questrenteneuf)
    localStorage.setItem("questionQuarante", data.quesquarante)

    let compteur = +localStorage.getItem('compt') + +this.compt;
    localStorage.setItem('compt',JSON.stringify(compteur));

  localStorage.setItem("questiontrentecenque", this.questrentecenque)
  localStorage.setItem("questrentesix", this.questrentesix)
  localStorage.setItem("questrentecepte", this.questrentecepte)
  localStorage.setItem("questrentehuite", this.questrentehuite)
  localStorage.setItem("questrenteneuf", this.questrenteneuf)
  localStorage.setItem("quesquarante", this.quesquarante)


    this.router.navigate(['/result']);
  }

  buck(){
    this.router.navigate(['/mondeDuTravail']);
  }
}
