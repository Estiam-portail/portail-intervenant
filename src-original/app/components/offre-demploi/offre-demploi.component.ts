import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultatsService } from 'src/app/services/resultats.service';

@Component({
  selector: 'app-offre-demploi',
  templateUrl: './offre-demploi.component.html',
  styleUrls: ['./offre-demploi.component.css']
})
export class OffreDemploiComponent implements OnInit {

  constructor(private resultService : ResultatsService, private router:Router) { }


  ngOnInit(): void {
  }

  offreDemploi(f)  {
    let data = f.value
    /***********   question 35 algo  ********** */
    if (data.questrentecenque == "oui") {
      this.resultService.CE = this.resultService.CE + 2;
      this.resultService.Calcul = this.resultService.Calcul + 2;
      this.resultService.RTemps = this.resultService.RTemps + 2;
    } else if (data.questrentecenque == "ouienpartie") {
      this.resultService.CE = this.resultService.CE + 2;
      this.resultService.Calcul = this.resultService.Calcul + 0;
      this.resultService.RTemps = this.resultService.RTemps + 1;
    } else {
      this.resultService.CE = this.resultService.CE + 0;
      this.resultService.Calcul = this.resultService.Calcul + 0;
    }
    /***********  fin question 35 algo  ********** */

    /***********   question  36 algo  ********** */
    if (data.questrentesix == "oui") {
      this.resultService.CE =this.resultService.CE + 3;
    }else if (data.questrentesix == "ouienpartie") {
      this.resultService.CE = this.resultService.CE + 1,5;
    }  else  {
      this.resultService.CE = this.resultService.CE + 0;
    }
    /***********  fin question  36  algo  ********** */


    /***********   37 algo  ********** */
    if (data.questrentecepte == "oui") {
      this.resultService.Calcul = this.resultService.Calcul + 5;
    } else {
      this.resultService.Calcul = this.resultService.Calcul + 0;
    }
    /***********  fin 37 algo  ********** */


    /***********   38 algo  ********** */
    if (data.questrentehuite  == "oui") {
      this.resultService.CE = this.resultService.CE + 3;
    } else if (data.questrentehuite  == "ouienpartie") {
      this.resultService.CE = this.resultService.CE + 1,5;
    } else {
      this.resultService.CE = this.resultService.CE + 0;
    }
    /***********  fin 38 algo  ********** */

    /***********   39 algo  ********** */
    if (data.questrenteneuf == "oui") {
      this.resultService.EE = this.resultService.EE + 4;
    } else if (data.questrenteneuf == "ouienpartie") {
      this.resultService.EE = this.resultService.EE + 2;
    } else {
      this.resultService.EE = this.resultService.EE + 0;
    }
    /***********  fin 39 algo  ********** */

    /***********   ques 40 algo  ********** */
    if (data.quesquarante == "oui") {
      this.resultService.EE = this.resultService.EE + 2;
    } else if(data.questrenteneuf == "ouienpartie") {
      this.resultService.EE = this.resultService.EE + 1;
    } else {
      this.resultService.EE = this.resultService.EE + 0;
    }
    /***********  fin ques 40 algo  ********** */

   
    console.log(
      " , EO : " + this.resultService.EO
    )
    console.log("normalement,  ,calcule : 7, rtemps: 2,  CE: 5  , EE : 6")
    
    this.router.navigate(['/result']);
  }
}
