import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultatsService } from 'src/app/services/resultats.service';

@Component({
  selector: 'app-se-deplacer-en-ville',
  templateUrl: './se-deplacer-en-ville.component.html',
  styleUrls: ['./se-deplacer-en-ville.component.css']
})
export class SeDeplacerEnVilleComponent implements OnInit {

  constructor(private resultService: ResultatsService, private router: Router) { }


  ngOnInit(): void {
  }

  SeDeplacerEnVille(f) {
    let data = f.value
    /***********   question 15 algo  ********** */
    if (data.quesquinze == "oui") {
      this.resultService.CE = this.resultService.CE + 1
    } else {
      this.resultService.CE = this.resultService.CE + 0
    }
    /***********  fin question 15 algo  ********** */

    /***********   question  16  algo  ********** */
    if (data.quesseize == "oui") {
      this.resultService.REspace = this.resultService.REspace + 1;
      this.resultService.CE =this.resultService.CE + 1
    } else  {
      this.resultService.REspace = this.resultService.REspace + 0;
      this.resultService.CE = this.resultService.CE + 0;
    }
    /***********  fin question  16  algo  ********** */

    /***********   17 algo  ********** */
    if (data.quesdixsept == "oui") {
      this.resultService.REspace = this.resultService.REspace + 1;
    } else if (data.quesdixsept == "ouienpartie") {
      this.resultService.REspace = this.resultService.REspace + 0,5;
    } else {
      this.resultService.REspace = this.resultService.REspace + 0;
    }
    /***********  fin 17 algo  ********** */

    /***********   18 algo  ********** */
    if (data.quesdixhuit == "oui") {
      this.resultService.CO = this.resultService.CO + 2;
      this.resultService.REspace = this.resultService.REspace + 3;
    } else if (data.quesdixhuit == "ouienpartie") {
      this.resultService.REspace = this.resultService.REspace + 0;
      this.resultService.CO = this.resultService.CO + 1;
    } else {
      this.resultService.REspace = this.resultService.REspace + 0;
      this.resultService.CO = this.resultService.CO + 0;
    }
    /***********  fin 18 algo  ********** */

    /***********   19 algo  ********** */
    if (data.quesdixneuf == "oui") {
      this.resultService.EO = this.resultService.EO + 2;
      this.resultService.REspace = this.resultService.REspace + 2;
    } else {
      this.resultService.EO = this.resultService.EO + 0;
      this.resultService.REspace = this.resultService.REspace + 0;
    }
    /***********  fin 19 algo  ********** */

    /***********   ques 20 algo  ********** */
    if (data.quesvingt == "oui") {
      this.resultService.REspace = this.resultService.REspace + 2;
    } else {
      this.resultService.REspace = this.resultService.REspace + 0;
    }
    /***********  fin ques 20 algo  ********** */

    /***********   ques 21 algo  ********** */
    if (data.quesvingtun == "oui") {
      this.resultService.CE = this.resultService.CE + 1;
    } else {
      this.resultService.CE = this.resultService.CE + 0;
    }
    /***********  fin ques 21 algo  ********** */

    /***********   ques 22 algo  ********** */
    if (data.quesvingtdeux == "oui") {
      this.resultService.CE = this.resultService.CE + 2;
      this.resultService.RTemps = this.resultService.RTemps + 2;
    } else if (data.quesvingtdeux == "ouienpartie") {
      this.resultService.CE = this.resultService.CE + 1;
      this.resultService.RTemps = this.resultService.RTemps + 1;
    } else {
      this.resultService.CE = this.resultService.CE + 0;
      this.resultService.RTemps = this.resultService.RTemps + 0;
    }
    /***********  fin ques 22 algo  ********** */

    /***********   ques 23 algo  ********** */
    if (data.quesvingtroix == "oui") {
      this.resultService.RTemps = this.resultService.RTemps + 2;
      this.resultService.EO = this.resultService.EO + 2;
    } else if (data.quesvingtroix == "ouienpartie") {
      this.resultService.RTemps = this.resultService.RTemps + 1;
      this.resultService.EO = this.resultService.EO + 1;
    } else {
      this.resultService.RTemps = this.resultService.RTemps + 0;
      this.resultService.EO = this.resultService.EO + 0;
    }
    /***********  fin ques 23 algo  ********** */

    /***********   ques 24 algo  ********** */
    if (data.quesvingtquatre == "oui") {
      this.resultService.RTemps = this.resultService.RTemps + 1;
    } else if (data.quesvingtquatre == "ouienpartie") {
      this.resultService.RTemps = this.resultService.RTemps + 0,5;
    } else {
      this.resultService.RTemps = this.resultService.RTemps + 0;
    }
    /***********  fin ques 24 algo  ********** */

    /***********   ques 25 algo  ********** */
    if (data.quesvingtcenque == "oui") {
      this.resultService.RTemps = this.resultService.RTemps + 4;
    } else  {
      this.resultService.RTemps = this.resultService.RTemps + 0;
    }
    /***********  fin ques 25 algo  ********** */

    /***********   ques 26 algo  ********** */
    if (data.quesvingtsix == "oui") {
      this.resultService.EO = this.resultService.EO + 2;
      this.resultService.REspace = this.resultService.REspace + 5;
    } else if (data.quesvingtsix == "ouienpartie") {
      this.resultService.EO = this.resultService.EO + 1;
      this.resultService.REspace = this.resultService.REspace + 2,5;
    } else {
      this.resultService.EO = this.resultService.EO + 0;
      this.resultService.REspace = this.resultService.REspace + 0;
    }
    /***********  fin ques 26 algo  ********** */

    /***********   ques 27 algo  ********** */
    if (data.quesvingtcept == "oui") {
      this.resultService.Calcul = this.resultService.Calcul + 6;
      this.resultService.CE = this.resultService.CE + 2;
    } else if (data.quesvingtcept == "ouienpartie") {
      this.resultService.Calcul = this.resultService.Calcul + 3;
      this.resultService.CE = this.resultService.CE + 1;
    } else {
      this.resultService.Calcul = this.resultService.Calcul + 0;
      this.resultService.CE = this.resultService.CE + 0;
    }
    /***********  fin ques 27 algo  ********** */


    /***********   ques 28 algo  ********** */
    if (data.quesvingthuit == "oui") {
      this.resultService.RTemps = this.resultService.RTemps + 4;
      this.resultService.CO = this.resultService.CO + 6;
      this.resultService.Calcul = this.resultService.Calcul + 3;
      this.resultService.EO = this.resultService.EO + 2;
    } else if (data.quesvingthuit == "ouienpartie") {
      this.resultService.RTemps = this.resultService.RTemps + 2;
      this.resultService.CO = this.resultService.CO + 3;
      this.resultService.Calcul = this.resultService.Calcul + 1,5;
      this.resultService.EO = this.resultService.EO + 1;
    } else {
      this.resultService.RTemps = this.resultService.RTemps + 0;
      this.resultService.CO = this.resultService.CO + 0;
      this.resultService.Calcul = this.resultService.Calcul + 0;
      this.resultService.EO = this.resultService.EO + 0;
    }
    /***********  fin ques 28 algo  ********** */

    console.log(
      "numerique : " + this.resultService.Numerique +
      " , co : " + this.resultService.CO +
      " , CE : " + this.resultService.CE +
      " , Caclcul : " + this.resultService.Calcul +
      " , REspace : " + this.resultService.REspace +
      " , RTemps : " + this.resultService.RTemps +
      " , EE : " + this.resultService.EE +
      " , EO : " + this.resultService.EO
    )

    
    this.router.navigate(['/mondeDuTravail']);
  }

}
