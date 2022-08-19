import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompteurService } from 'src/app/services/compteur.service';
import { ResultatsService } from 'src/app/services/resultats.service';

@Component({
  selector: 'app-se-deplacer-en-ville',
  templateUrl: './se-deplacer-en-ville.component.html',
  styleUrls: ['./se-deplacer-en-ville.component.css']
})
export class SeDeplacerEnVilleComponent implements OnInit {
  myDate = new Date();
  compteur
  // ******************************
  quesquinze
  quesseize
  quesdixsept
  quesdixhuit
  quesdixneuf
  quesvingt
  quesvingtun
  quesvingtdeux
  quesvingtroix
  quesvingtquatre
  quesvingtcenque
  quesvingtsix
  quesvingtcept
  quesvingthuit
  quesvingtneuf
  // ******************************
  constructor(private resultService: ResultatsService,public comptService : CompteurService, private router: Router) {
// ***********************************
this.quesquinze = localStorage.getItem("questionquinze");
this.quesseize = localStorage.getItem("questionseize");
this.quesdixsept = localStorage.getItem("questiondixsept" );
this.quesdixhuit = localStorage.getItem("questiondixhuit");
this.quesdixneuf = localStorage.getItem("questiondixneuf");
this.quesvingt = localStorage.getItem("questionvingt");
this.quesvingtun = localStorage.getItem("questionvingtun");
this.quesvingtdeux = localStorage.getItem("questionvingtdeux");
this.quesvingtroix = localStorage.getItem("questionvingtroix");
this.quesvingtquatre = localStorage.getItem("questionvingtquatre");
this.quesvingtcenque = localStorage.getItem("questionvingtcenque");
this.quesvingtsix = localStorage.getItem("questionvingtsix");
this.quesvingtcept = localStorage.getItem("questionvingtcept");
this.quesvingthuit = localStorage.getItem("questionvingthuit");
this.quesvingtneuf = localStorage.getItem("questionvingtneuf");


// ***********************************

   }
  compteurquestionQuinze;
  compteurquestionSeize
  compteurquestionDixsept
  compteurquestionDixhuit
  compteurquestiondixneuf
  compteurquestionVingt
  compteurquestionVingtun
  compteurquestionVingtdeux
  compteurquestionVingttroix
  compteurquestionVingtquatre
  compteurquestionVingtcenq
  compteurquestionVingtsix
  compteurquestionVingtsept
  compteurquestionVingthuit
  compt=0
  ngOnInit(): void {
  }
// **********************************
handleChangequesQuinze(evt){
  if(this.compteurquestionQuinze>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionQuinze = 1
  }
}
handleChangequesSeize(evt){
  if(this.compteurquestionSeize>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionSeize = 1
  }
}
handleChangequesDixsept(evt){
  if(this.compteurquestionDixsept>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionDixsept = 1
  }
}
handleChangequesDixhuit(evt){
  if(this.compteurquestionDixhuit>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionDixhuit = 1
  }
}
handleChangequesDixneuf(evt){
  if(this.compteurquestiondixneuf>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestiondixneuf = 1
  }
}

handleChangequesVingt(evt){
  if(this.compteurquestionVingt>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionVingt = 1
  }
}
handleChangequesVingtun(evt){
  if(this.compteurquestionVingtun>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionVingtun = 1
  }
}
handleChangequesVingtdeux(evt){
  if(this.compteurquestionVingtdeux>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionVingtdeux = 1
  }
}
handleChangequesVingttroix(evt){
  if(this.compteurquestionVingttroix>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionVingttroix = 1
  }
}
handleChangequesVingtquatre(evt){
  if(this.compteurquestionVingtquatre>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionVingtquatre = 1
  }
}
handleChangequesVingtcenq(evt){
  if(this.compteurquestionVingtcenq>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionVingtcenq = 1
  }
}
handleChangequesVingtsix(evt){
  if(this.compteurquestionVingtsix>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionVingtsix = 1
  }
}
handleChangequesVingtsept(evt){
  if(this.compteurquestionVingtsept>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionVingtsept = 1
  }
}
handleChangequesVingthuit(evt){
  if(this.compteurquestionVingthuit>0){
    this.compt = this.compt
  }
  else{
    this.compt = this.compt+1
    this.compteurquestionVingthuit = 1
  }
}


// **************************************

  SeDeplacerEnVille(f) {
    let data = f.value
    /***********   question 15 algo  ********** */
    if (data.quesquinze == "oui") {
      this.resultService.CE = this.resultService.CE + 1
      this.quesquinze = "oui"
    } else {
      this.resultService.CE = this.resultService.CE + 0
      this.quesquinze = "non"
    }
    /***********  fin question 15 algo  ********** */

    /***********   question  16  algo  ********** */
    if (data.quesseize == "oui") {
      this.resultService.REspace = this.resultService.REspace + 1;
      this.resultService.CE =this.resultService.CE + 1
      this.quesseize = "oui"
    } else  {
      this.resultService.REspace = this.resultService.REspace + 0;
      this.resultService.CE = this.resultService.CE + 0;
      this.quesseize = "non"
    }
    /***********  fin question  16  algo  ********** */

    /***********   17 algo  ********** */
    if (data.quesdixsept == "oui") {
      this.resultService.REspace = this.resultService.REspace + 1;
      this.quesdixsept = "oui"
    } else if (data.quesdixsept == "ouienpartie") {
      this.resultService.REspace = this.resultService.REspace + 0,5;
      this.quesdixsept = "ouienpartie"
    } else {
      this.resultService.REspace = this.resultService.REspace + 0;
      this.quesdixsept = "non"
    }
    /***********  fin 17 algo  ********** */

    /***********   18 algo  ********** */
    if (data.quesdixhuit == "oui") {
      this.resultService.CO = this.resultService.CO + 2;
      this.resultService.REspace = this.resultService.REspace + 3;
      this.quesdixhuit = "oui"
    } else if (data.quesdixhuit == "ouienpartie") {
      this.resultService.REspace = this.resultService.REspace + 0;
      this.resultService.CO = this.resultService.CO + 1;
      this.quesdixhuit = "ouienpartie"
    } else {
      this.resultService.REspace = this.resultService.REspace + 0;
      this.resultService.CO = this.resultService.CO + 0;
      this.quesdixhuit = "non"
    }
    /***********  fin 18 algo  ********** */

    /***********   19 algo  ********** */
    if (data.quesdixneuf == "oui") {
      this.resultService.EO = this.resultService.EO + 2;
      this.resultService.REspace = this.resultService.REspace + 2;
      this.quesdixneuf = "oui"
    } else {
      this.resultService.EO = this.resultService.EO + 0;
      this.resultService.REspace = this.resultService.REspace + 0;
      this.quesdixneuf = "non"
    }
    /***********  fin 19 algo  ********** */

    /***********   ques 20 algo  ********** */
    if (data.quesvingt == "oui") {
      this.resultService.REspace = this.resultService.REspace + 2;
      this.quesvingt = "oui"
    } else {
      this.resultService.REspace = this.resultService.REspace + 0;
      this.quesvingt = "non"
    }
    /***********  fin ques 20 algo  ********** */

    /***********   ques 21 algo  ********** */
    if (data.quesvingtun == "oui") {
      this.resultService.CE = this.resultService.CE + 1;
      this.quesvingtun = "oui"
    } else {
      this.resultService.CE = this.resultService.CE + 0;
      this.quesvingtun = "non"
    }
    /***********  fin ques 21 algo  ********** */

    /***********   ques 22 algo  ********** */
    if (data.quesvingtdeux == "oui") {
      this.resultService.CE = this.resultService.CE + 2;
      this.resultService.RTemps = this.resultService.RTemps + 2;
      this.quesvingtdeux = "oui"
    } else if (data.quesvingtdeux == "ouienpartie") {
      this.resultService.CE = this.resultService.CE + 1;
      this.resultService.RTemps = this.resultService.RTemps + 1;
      this.quesvingtdeux = "ouienpartie"
    } else {
      this.resultService.CE = this.resultService.CE + 0;
      this.resultService.RTemps = this.resultService.RTemps + 0;
      this.quesvingtdeux = "non"
    }
    /***********  fin ques 22 algo  ********** */

    /***********   ques 23 algo  ********** */
    if (data.quesvingtroix == "oui") {
      this.resultService.RTemps = this.resultService.RTemps + 2;
      this.resultService.EO = this.resultService.EO + 2;
      this.quesvingtroix = "oui"
    } else if (data.quesvingtroix == "ouienpartie") {
      this.resultService.RTemps = this.resultService.RTemps + 1;
      this.resultService.EO = this.resultService.EO + 1;
      this.quesvingtroix = "ouienpartie"
    } else {
      this.resultService.RTemps = this.resultService.RTemps + 0;
      this.resultService.EO = this.resultService.EO + 0;
      this.quesvingtroix = "non"
    }
    /***********  fin ques 23 algo  ********** */

    /***********   ques 24 algo  ********** */
    if (data.quesvingtquatre == "oui") {
      this.resultService.RTemps = this.resultService.RTemps + 1;
      this.quesvingtquatre = "oui"
    } else if (data.quesvingtquatre == "ouienpartie") {
      this.resultService.RTemps = this.resultService.RTemps + 0,5;
      this.quesvingtquatre = "ouienpartie"
    } else {
      this.resultService.RTemps = this.resultService.RTemps + 0;
      this.quesvingtquatre = "non"
    }
    /***********  fin ques 24 algo  ********** */

    /***********   ques 25 algo  ********** */
    if (data.quesvingtcenque == "oui") {
      this.resultService.RTemps = this.resultService.RTemps + 4;
      this.quesvingtcenque = "oui"
    } else  {
      this.resultService.RTemps = this.resultService.RTemps + 0
      this.quesvingtcenque = "non"
    }
    /***********  fin ques 25 algo  ********** */

    /***********   ques 26 algo  ********** */
    if (data.quesvingtsix == "oui") {
      this.resultService.EO = this.resultService.EO + 2;
      this.resultService.REspace = this.resultService.REspace + 5;
      this.quesvingtsix = "oui"
    } else if (data.quesvingtsix == "ouienpartie") {
      this.resultService.EO = this.resultService.EO + 1;
      this.resultService.REspace = this.resultService.REspace + 2,5;
      this.quesvingtsix = "ouienpartie"
    } else {
      this.resultService.EO = this.resultService.EO + 0;
      this.resultService.REspace = this.resultService.REspace + 0;
      this.quesvingtsix = "non"
    }
    /***********  fin ques 26 algo  ********** */

    /***********   ques 27 algo  ********** */
    if (data.quesvingtcept == "oui") {
      this.resultService.Calcul = this.resultService.Calcul + 6;
      this.resultService.CE = this.resultService.CE + 2;
      this.quesvingtcept = "oui"
    } else if (data.quesvingtcept == "ouienpartie") {
      this.resultService.Calcul = this.resultService.Calcul + 3;
      this.resultService.CE = this.resultService.CE + 1;
      this.quesvingtcept = "ouienpartie"
    } else {
      this.resultService.Calcul = this.resultService.Calcul + 0;
      this.resultService.CE = this.resultService.CE + 0;
      this.quesvingtcept = "non"
    }
    /***********  fin ques 27 algo  ********** */


    /***********   ques 28 algo  ********** */
    if (data.quesvingthuit == "oui") {
      this.resultService.RTemps = this.resultService.RTemps + 4;
      this.resultService.CO = this.resultService.CO + 6;
      this.resultService.Calcul = this.resultService.Calcul + 3;
      this.resultService.EO = this.resultService.EO + 2;
      this.quesvingthuit = "oui"
    } else if (data.quesvingthuit == "ouienpartie") {
      this.resultService.RTemps = this.resultService.RTemps + 2;
      this.resultService.CO = this.resultService.CO + 3;
      this.resultService.Calcul = this.resultService.Calcul + 1,5;
      this.resultService.EO = this.resultService.EO + 1;
      this.quesvingthuit = "ouienpartie"
    } else {
      this.resultService.RTemps = this.resultService.RTemps + 0;
      this.resultService.CO = this.resultService.CO + 0;
      this.resultService.Calcul = this.resultService.Calcul + 0;
      this.resultService.EO = this.resultService.EO + 0;
      this.quesvingthuit = "non"
    }
    /***********  fin ques 28 algo  ********** */

    localStorage.setItem("questionQuinze", data.quesquinze)
    localStorage.setItem("questionSeize", data.quesseize)
    localStorage.setItem("questionDixsept", data.quesdixsept)
    localStorage.setItem("questionDixhuit", data.quesdixhuit)
    localStorage.setItem("questionDixneuf", data.quesdixneuf)
    localStorage.setItem("questionVingt", data.quesvingt)
    localStorage.setItem("questionVingtun", data.quesvingtun)
    localStorage.setItem("questionVingtdeux", data.quesvingtdeux)
    localStorage.setItem("questionVingttroix", data.quesvingtroix)
    localStorage.setItem("questionVingtquatre", data.quesvingtquatre)
    localStorage.setItem("questionVingtcenque", data.quesvingtcenque)
    localStorage.setItem("questionVingtsix", data.quesvingtsix)
    localStorage.setItem("questionVingtcept", data.quesvingtcept)
    localStorage.setItem("questionVingthuit", data.quesvingthuit)

    localStorage.setItem("compt",JSON.stringify(this.compt));
    this.compteur = localStorage.getItem('compt')
    this.comptService.compteur = +(this.comptService.compteur) + +(this.compt)


    // ***************************************
    localStorage.setItem("questionquinze", this.quesquinze);
    localStorage.setItem("questionseize", this.quesseize);
    localStorage.setItem("questiondixsept", this.quesdixsept);
    localStorage.setItem("questiondixhuit", this.quesdixhuit);
    localStorage.setItem("questiondixneuf", this.quesdixneuf);
    localStorage.setItem("questionvingt", this.quesvingt);
    localStorage.setItem("questionvingtun", this.quesvingtun);
    localStorage.setItem("questionvingtdeux", this.quesvingtdeux);
    localStorage.setItem("questionvingtroix", this.quesvingtroix);
    localStorage.setItem("questionvingtquatre", this.quesvingtquatre);
    localStorage.setItem("questionvingtcenque", this.quesvingtcenque);
    localStorage.setItem("questionvingtsix", this.quesvingtsix);
    localStorage.setItem("questionvingtcept", this.quesvingtcept);
    localStorage.setItem("questionvingthuit", this.quesvingthuit);
    localStorage.setItem("questionvingtneuf", this.quesvingtneuf);

    // ****************************************


    this.router.navigate(['/mondeDuTravail']);
  }

}
