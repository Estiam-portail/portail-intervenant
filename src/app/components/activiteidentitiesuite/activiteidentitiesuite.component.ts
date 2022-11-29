import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompteurService } from 'src/app/services/compteur.service';
import { ResultatsService } from 'src/app/services/resultats.service';

@Component({
  selector: 'app-activiteidentitiesuite',
  templateUrl: './activiteidentitiesuite.component.html',
  styleUrls: ['./activiteidentitiesuite.component.css']
})
export class ActiviteidentitiesuiteComponent implements OnInit {
  compteur
  compteurquestionDix;
  compteurquestionOnze
  compteurquestionDouze
  compteurquestionTreise
  compteurquestionQuatorze
  compt=0
  // µ**************************************

  quesdix
  quesonze
  quesdouze
  questreize
  quesquatorze
  // ******************************************
  constructor(private resultService : ResultatsService,
    public comptService : CompteurService, private router:Router) { 
    this.compteur = localStorage.getItem('compt')
    this.quesdix = localStorage.getItem("valeurQuestiondix")
    this.quesonze = localStorage.getItem("valeurQuestiononze")
    this.quesdouze = localStorage.getItem("valeurQuestiondouze")
    this.questreize = localStorage.getItem("valeurQuestiontreize")
    this.quesquatorze = localStorage.getItem("valeurQuestionquatorze")
  }
 
  ngOnInit(): void {
  }
// ****************************************
handleChangequesDix(evt){
  if(this.compteurquestionDix>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionDix = 1
  }

}

handleChangequesOnze(evt){
  if(this.compteurquestionOnze>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionOnze = 1
  }

}

handleChangequesDouze(evt){
  if(this.compteurquestionDouze>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionDouze = 1
  }

}

handleChangequesTreise(evt){
  if(this.compteurquestionTreise>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionTreise = 1
  }

}


handleChangequesQuatorze(evt){
  if(this.compteurquestionQuatorze>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionQuatorze = 1
  }

}

  // *************************************

  activiteidentitiesuite(f){
    let data = f.value
    /***********   question dix algo  ********** */
    if (data.quesdix == "oui") {
      this.resultService.Numerique = this.resultService.Numerique + 4
      this.quesdix = "oui"
    } else if(data.quesdix == "ouienpartie"){
      this.resultService.Numerique = this.resultService.Numerique + 2
      this.quesdix = "ouienpartie"
    }else {
      this.resultService.Numerique = this.resultService.Numerique + 0
      this.quesdix = "non"
    }
    /***********  fin question dix algo  ********** */

    /***********   question onze algo  ********** */
    if (data.quesonze == "oui") {
      this.resultService.EE =this.resultService.EE + 2;
      this.resultService.CE =this.resultService.CE + 2;
      this.quesonze = "oui"
    } else if (data.quesonze == "ouienpartie") {
      this.resultService.Numerique =this.resultService.Numerique + 1;
      this.resultService.CE =this.resultService.CE + 1;
      this.quesonze = "ouienpartie"
    } else {
      this.resultService.Numerique =this.resultService.Numerique + 0;
      this.resultService.CE =this.resultService.CE + 0;
      this.quesonze = "non"
    }
    /***********  fin question onze algo  ********** */

    /***********   question douze algo  ********** */
    if (data.quesdouze == "oui") {
      this.resultService.Calcul = this.resultService.Calcul + 1;
      this.resultService.RTemps = this.resultService.RTemps + 1;
      this.quesdouze = "oui"
    } else {
      
      this.resultService.Calcul = this.resultService.Calcul + 0;
      this.resultService.RTemps = this.resultService.RTemps + 0;
      this.quesdouze = "non"
    }
    /***********  fin question douze algo  ********** */

    /***********   question treize algo  ********** */
    if (data.questreize == "oui") {
      this.resultService.EE =this.resultService.EE + 1;
      this.questreize = "oui"
    } else {
      this.resultService.EE =this.resultService.EE + 0;
      this.questreize = "non"
    }
    /***********  fin question treize algo  ********** */
   


    /***********   question quatorze algo  ********** */
    if (data.quesquatorze == "oui") {
      this.resultService.RTemps =this.resultService.RTemps + 1;
      this.quesquatorze = "oui"
    } else{
      this.resultService.RTemps =this.resultService.RTemps + 0;
      this.quesquatorze = "non"
    }
    /***********  fin question quatorze algo  ********** */
   
    localStorage.setItem("questionDix", data.quesdix);
    localStorage.setItem("questionOnze", data.quesonze);
    localStorage.setItem("questionDouze", data.quesdouze);
    localStorage.setItem("questionTreize", data.questreize);
    localStorage.setItem("questionQuatorze", data.quesquatorze);

    
    let compteur = +localStorage.getItem('compt') + +this.compt;
    localStorage.setItem('compt',JSON.stringify(compteur));
    this.router.navigate(['/SeDeplacerEnVille']);

  localStorage.setItem("valeurQuestiondix", this.quesdix)
  localStorage.setItem("valeurQuestiononze", this.quesonze)
  localStorage.setItem("valeurQuestiondouze", this.quesdouze)
  localStorage.setItem("valeurQuestiontreize", this.questreize)
  localStorage.setItem("valeurQuestionquatorze", this.quesquatorze)

  }


  buck(){
    this.router.navigate(['/identity']);
  }

}
