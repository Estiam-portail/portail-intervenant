import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompteurService } from 'src/app/services/compteur.service';
import { ResultatsService } from 'src/app/services/resultats.service';

@Component({
  selector: 'app-fichier-audio',
  templateUrl: './fichier-audio.component.html',
  styleUrls: ['./fichier-audio.component.css']
})
export class FichierAudioComponent{
  // comtAffichage:boolean=true
  // compteurAffichage:boolean=false
  expression:boolean;
  compteurquestionUn:number = 0;
  compteurquestionDeux:number = 0
  compteurquestionTroix:number = 0
  compteurquestionQuatre:number = 0
  compteurquestionCenq:number = 0
  compteur ;
  compt :number= 0
  savequesun
  compteurService
  // ******** save chekced ***********
  quesUn='';
  quesDeux='';
  quesTroix='';
  quesQuatre='';
  quesCenque = '';
  // ********  fin save chekced ***********
  constructor(
    public comptService : CompteurService,
    private resultService: ResultatsService,
     private router: Router) 
     {

     this.compteur = JSON.parse(localStorage.getItem('compt'))
    localStorage.setItem('questionun',"oui" )
    this.savequesun = localStorage.getItem('questionun');
    this.quesUn = localStorage.getItem("valeurQuestionUn")
    this.quesDeux = localStorage.getItem("valeurQuestiondeux")
    this.quesTroix = localStorage.getItem("valeurQuestiontroix")
    this.quesQuatre = localStorage.getItem("valeurQuestionquatre")
    this.quesCenque = localStorage.getItem("valeurQuestioncenque")
   }


// *******  test save chet ***********

onSavequesunChanged(savequesunCheckBox){
  this.savequesun = localStorage.getItem('questionun');
}

//  ******************** start  click radio button for progression µµµ*********
 
   handleChangequesUn(evt) {
    if(this.compteurquestionUn>0){
      this.compt = this.compt
      
    }
    else{
      this.compt = this.compt+1
      this.compteurquestionUn = 1
    }

   
  }

  handleChangequesdeux(evt) {
    if(this.compteurquestionDeux>0){
      this.compt = this.compt
    }
    else{
      this.compt = this.compt+1
      this.compteurquestionDeux = 1
    }
  }

  handleChangequesTroix(evt) {
    if(this.compteurquestionTroix>0){
      this.compt = this.compt
    }
    else{
      this.compt = this.compt+1
      this.compteurquestionTroix = 1
    }
  }
  handleChangequesQuatre(evt) {
    if(this.compteurquestionQuatre>0){
      this.compt = this.compt
    }
    else{
      this.compt = this.compt+1
      this.compteurquestionQuatre = 1
    }
  }
  handleChangequesCenq($event){
    if(this.compteurquestionCenq>0){
      this.compt = this.compt
    }
    else{
      this.compt = this.compt+1
      this.compteurquestionCenq = 1
    }
  }
//  ********************  click radio button for progression µµµ*********
  ficheAudio(f) {
    let data = f.value
    /***********   question un algo  ********** */
    if (data.quesUn == "oui") {
      this.resultService.Numerique = this.resultService.Numerique + 1
      this.expression = true
      this.quesUn = "oui"
    } else {
      this.resultService.Numerique = this.resultService.Numerique + 0
      this.expression = true
      this.quesUn = "non"
      console.log(this.quesUn, 'rarar');
      
    }
    /***********  fin question un algo  ********** */

    /***********   question deux algo  ********** */
    if (data.quesDeux == "oui") {
      this.resultService.CO = this.resultService.CO + 4;
      this.resultService.EO = this.resultService.EO + 3
      this.quesDeux = "oui"
    } else if (data.quesdeux == "ouienpartie") {
      this.resultService.CO = this.resultService.CO + 2;
      this.resultService.EO = this.resultService.EO + 1, 5
      this.quesDeux = "ouienpartie"
    } else {
      this.resultService.CO = this.resultService.CO + 0;
      this.resultService.EO = this.resultService.EO + 0;
      this.quesDeux = "non"
     
    }
    /***********  fin question deux algo  ********** */

    /***********   question troix algo  ********** */
    if (data.quesTroix == "oui") {
      this.resultService.Numerique = this.resultService.Numerique + 2;
      this.quesTroix = "oui"
      
    } else if (data.quesTroix == "ouienpartie") {
      this.resultService.Numerique = this.resultService.Numerique + 1;
      this.quesTroix = "ouienpartie"
    } else {
      this.resultService.Numerique = this.resultService.Numerique + 0;
      this.quesTroix = "non"
    }
    /***********  fin question troix algo  ********** */

    /***********   question Quatre algo  ********** */
    if (data.quesQuatre == "oui") {
      this.resultService.CO = this.resultService.CO + 3;
      this.quesQuatre = "oui"
      
    } else if (data.quesQuatre == "ouienpartie") {
      this.resultService.CO = this.resultService.CO + 1, 5;
      this.quesQuatre = "ouienpartie"
    } else {
      this.resultService.CO = this.resultService.CO + 0;
      this.quesQuatre = "non"
    }
    /***********  fin question Quatre algo  ********** */

    /***********   question cenque algo  ********** */
    if (data.quesCenque == "oui") {
      this.resultService.EO = this.resultService.EO + 6;
      this.resultService.CO = this.resultService.CO + 4;
      this.quesCenque = "oui"
      
    } else if (data.quesCenque == "ouienpartie") {
      this.resultService.EO = this.resultService.EO + 3;
      this.resultService.CO = this.resultService.CO + 2;
      this.quesCenque = "ouienpartie"
    } else {
      this.resultService.EO = this.resultService.EO + 0;
      this.resultService.CO = this.resultService.CO + 0;
      this.quesCenque = "non"
    }
    /***********  fin question cenque algo  ********** */
    
    // this.quetionUn = data.quesUn;
    // this.quetiondeux = data.quesDeux

    localStorage.setItem("questionUn", data.quesUn)
    localStorage.setItem("questionDeux",  data.quesDeux)
    localStorage.setItem("questionTroix",  data.quesTroix)
    localStorage.setItem("questionQuatre", data.quesQuatre)
    localStorage.setItem("questionCenque",  data.quesCenque)
    //:::::::::::::::::::::::::::::::::::::::::::::::::
    // let number = 6
    // localStorage.setItem("testlocalnumber",  JSON.stringify(number))
    this.router.navigate(['/activiteidentite']);
    console.log("compte : ", this.compt);
    
    localStorage.setItem('compt',JSON.stringify(this.compt));
  this.compteur = localStorage.getItem('compt')
  
  this.comptService.compteur = this.compteur;
  localStorage.setItem('comptServiceCompteur',this.compteur);
  
  console.log(this.quesUn, 'rarar');
  localStorage.setItem("valeurQuestionUn", this.quesUn)
  localStorage.setItem("valeurQuestiondeux", this.quesDeux)
  localStorage.setItem("valeurQuestiontroix", this.quesTroix)
  localStorage.setItem("valeurQuestionquatre", this.quesQuatre)
  localStorage.setItem("valeurQuestioncenque", this.quesCenque)

  }

  /**********************   fin meethode fiche audio  *********************** */




}
