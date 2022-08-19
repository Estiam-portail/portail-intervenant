import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultatsService } from 'src/app/services/resultats.service';

@Component({
  selector: 'app-monde-du-travail',
  templateUrl: './monde-du-travail.component.html',
  styleUrls: ['./monde-du-travail.component.css']
})
export class MondeDuTravailComponent implements OnInit {

  constructor(private resultService : ResultatsService, private router:Router) { }


  ngOnInit(): void {
  }

  modedutravail(f){
    let data = f.value
    console.log("data " + data.quesvingtneuf)
    /***********   question 29 algo  ********** */
    if (data.quesvingtneuf == "oui") {
      this.resultService.CE = this.resultService.CE + 1
      this.resultService.EO =this.resultService.EO + 1;
    } else {
      this.resultService.CE = this.resultService.CE + 0
      this.resultService.EO =this.resultService.EO + 0;
    }
    /***********  fin question 29 algo  ********** */

    /***********   question 30 algo  ********** */
    if (data.questrente == "oui") {
      this.resultService.CE =this.resultService.CE + 1;
    } else{
      this.resultService.CE =this.resultService.CE + 0;
    }
    /***********  fin question 30 algo  ********** */

    /***********   question 31 algo  ********** */
    if (data.questrenteun == "oui") {
      this.resultService.CE = this.resultService.CE + 1;
    } else {
      this.resultService.CE = this.resultService.CE + 0;
    }
    /***********  fin question 31 algo  ********** */

    /***********   question 32 algo  ********** */
    if (data.questrentedeux == "oui") {
      this.resultService.CO =this.resultService.CO + 4;
      this.resultService.EO =this.resultService.EO + 2;
    } else if (data.questrentedeux == "ouienpartie") {
      this.resultService.CO =this.resultService.CO + 2;
      this.resultService.EO =this.resultService.EO + 1;
    } else {
      this.resultService.CO =this.resultService.CO + 0;
      this.resultService.EO =this.resultService.EO + 0;
    }
    /***********  fin question 32 algo  ********** */
   
    /***********   question 33 algo  ********** */
    if (data.questrentetroix == "oui") {
      this.resultService.RTemps =this.resultService.RTemps + 1;
      this.resultService.Calcul =this.resultService.Calcul + 2;
    } else if (data.questrentetroix == "ouienpartie") {
      this.resultService.RTemps =this.resultService.RTemps + 0;
      this.resultService.Calcul =this.resultService.Calcul + 0,5;
    } else {
      this.resultService.RTemps =this.resultService.RTemps + 0;
      this.resultService.Calcul =this.resultService.Calcul + 0;
    }
    /***********  fin question 33 algo  ********** */

    /***********   question 34 algo  ********** */
    if (data.questrentequatre == "oui") {
      this.resultService.Calcul =this.resultService.Calcul + 2;
    } else {
      this.resultService.Calcul =this.resultService.Calcul + 0;
    }
    /***********  fin question 34 algo  ********** */

    console.log("normalement,  EO :  3")
    
    console.log(this.resultService.EO)
    // console.log(
    //   "numerique : " + this.resultService.Numerique +
    //   " , co : " + this.resultService.CO +
    //   " , CE : " + this.resultService.CE +
    //   " , Caclcul : " + this.resultService.Calcul +
    //   " , REspace : " + this.resultService.REspace +
    //   " , RTemps : " + this.resultService.RTemps +
    //   " , EE : " + this.resultService.EE +
    //   " , EO : " + this.resultService.EO
    // )
    
    
    this.router.navigate(['/offreDemploi']);
  }
  

}
