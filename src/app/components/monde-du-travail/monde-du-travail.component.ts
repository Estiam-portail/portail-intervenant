import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompteurService } from 'src/app/services/compteur.service';
import { ResultatsService } from 'src/app/services/resultats.service';

@Component({
  selector: 'app-monde-du-travail',
  templateUrl: './monde-du-travail.component.html',
  styleUrls: ['./monde-du-travail.component.css']
})
export class MondeDuTravailComponent implements OnInit {
  compteurquestionVingtneuf
  compteurquestionTrente
  compteurquestionTrenteun
  compteurquestionTrentedeux
  compteurquestionTrentetroix
  compteurquestionTrentequatre
  compt=0
  compteur
  // ****************************
  quesvingtneuf
  questrente
  questrenteun
  questrentedeux
  questrentetroix
  questrentequatre
  // *****************************
  constructor(private resultService : ResultatsService
    ,public comptService : CompteurService, private router:Router) {
        // ********************************/
        this.quesvingtneuf = localStorage.getItem("valeurQuesvingtneuf")
        this.questrente = localStorage.getItem("valeurQuestiontrente")
        this.questrenteun = localStorage.getItem("valeurQuestiontrenteun")
        this.questrentedeux = localStorage.getItem("valeurQuestiontrentedeux")
        this.questrentetroix = localStorage.getItem("valeurQuestiontrentetroix")
        this.questrentequatre = localStorage.getItem("valeurQuestiontrentequatre")
        // ********************************
        this.compteur = localStorage.getItem('compt')
   }
// *********************************************
handleChangequesVingtneuf(evt){
  if(this.compteurquestionVingtneuf>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionVingtneuf = 1
  }
}
handleChangequesTrente(evt){
  if(this.compteurquestionTrente>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionTrente = 1
  }
}
handleChangequesTrenteun(evt){
  if(this.compteurquestionTrenteun>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionTrenteun = 1
  }
}
handleChangequesTrentedeux(evt){
  if(this.compteurquestionTrentedeux>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionTrentedeux = 1
  }
}
handleChangequesTrentetroix(evt){
  if(this.compteurquestionTrentetroix>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionTrentetroix = 1
  }
}
handleChangequesTrentequatre(evt){
  if(this.compteurquestionTrentequatre>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionTrentequatre = 1
  }
}
// *********************************************

  ngOnInit(): void {
  }

  modedutravail(f){
    let data = f.value
    console.log("data " + data.quesvingtneuf)
    /***********   question 29 algo  ********** */
    if (data.quesvingtneuf == "oui") {
      this.resultService.CE = this.resultService.CE + 1
      this.resultService.EO =this.resultService.EO + 1;
      this.quesvingtneuf = "oui"
    } else {
      this.resultService.CE = this.resultService.CE + 0
      this.resultService.EO =this.resultService.EO + 0;
      this.quesvingtneuf = "oui"
    }
    /***********  fin question 29 algo  ********** */

    /***********   question 30 algo  ********** */
    if (data.questrente == "oui") {
      this.resultService.CE =this.resultService.CE + 1;
      this.questrente = "oui"
    } else{
      this.resultService.CE =this.resultService.CE + 0;
      this.questrente = "oui"
    }
    /***********  fin question 30 algo  ********** */

    /***********   question 31 algo  ********** */
    if (data.questrenteun == "oui") {
      this.resultService.CE = this.resultService.CE + 1;
      this.questrenteun = "oui"
    } else {
      this.resultService.CE = this.resultService.CE + 0;
      this.questrenteun = "non"
    }
    /***********  fin question 31 algo  ********** */

    /***********   question 32 algo  ********** */
    if (data.questrentedeux == "oui") {
      this.resultService.CO =this.resultService.CO + 4;
      this.resultService.EO =this.resultService.EO + 2;
      this.questrentedeux = "oui"
    } else if (data.questrentedeux == "ouienpartie") {
      this.resultService.CO =this.resultService.CO + 2;
      this.resultService.EO =this.resultService.EO + 1;
      this.questrentedeux = "ouienpartie"
    } else {
      this.resultService.CO =this.resultService.CO + 0;
      this.resultService.EO =this.resultService.EO + 0;
      this.questrentedeux = "non"
    }
    /***********  fin question 32 algo  ********** */
   
    /***********   question 33 algo  ********** */
    if (data.questrentetroix == "oui") {
      this.resultService.RTemps =this.resultService.RTemps + 1;
      this.resultService.Calcul =this.resultService.Calcul + 2;
      this.questrentetroix = "oui"
    } else if (data.questrentetroix == "ouienpartie") {
      this.resultService.RTemps =this.resultService.RTemps + 0;
      this.resultService.Calcul =this.resultService.Calcul + 0,5;
      this.questrentetroix = "ouienpartie"
    } else {
      this.resultService.RTemps =this.resultService.RTemps + 0;
      this.resultService.Calcul =this.resultService.Calcul + 0;
      this.questrentetroix = "non"
    }
    /***********  fin question 33 algo  ********** */

    /***********   question 34 algo  ********** */
    if (data.questrentequatre == "oui") {
      this.resultService.Calcul =this.resultService.Calcul + 2;
      this.questrentequatre = "oui"
    } else {
      this.resultService.Calcul =this.resultService.Calcul + 0;
      this.questrentequatre = "non"
    }
    /***********  fin question 34 algo  ********** */

    localStorage.setItem("questionVingtneuf", data.quesvingtneuf);
    localStorage.setItem("questionTrente", data.questrente);
    localStorage.setItem("questionTrenteun", data.questrenteun);
    localStorage.setItem("questionTrentedeux", data.questrentedeux);
    localStorage.setItem("questionTrentetroix", data.questrentetroix);
    localStorage.setItem("questionTrentequatre", data.questrentequatre);
  
    
    let compteur = +localStorage.getItem('compt') + +this.compt;
    localStorage.setItem('compt',JSON.stringify(compteur));
    // ********************************/
    localStorage.setItem("valeurQuesvingtneuf", this.quesvingtneuf)
    localStorage.setItem("valeurQuestiontrente", this.questrente)
    localStorage.setItem("valeurQuestiontrenteun", this.questrenteun)
    localStorage.setItem("valeurQuestiontrentedeux", this.questrentedeux)
    localStorage.setItem("valeurQuestiontrentetroix", this.questrentetroix)
    localStorage.setItem("valeurQuestiontrentequatre", this.questrentequatre)
    // ********************************



    this.router.navigate(['/offreDemploi']);
  }
  

  buck(){
    this.router.navigate(['/SeDeplacerEnVille']);
  }

}
