import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultatsService } from 'src/app/services/resultats.service';

@Component({
  selector: 'app-activiteidentitiesuite',
  templateUrl: './activiteidentitiesuite.component.html',
  styleUrls: ['./activiteidentitiesuite.component.css']
})
export class ActiviteidentitiesuiteComponent implements OnInit {

  constructor(private resultService : ResultatsService, private router:Router) { }
 
  ngOnInit(): void {
  }

  activiteidentitiesuite(f){
    let data = f.value
    /***********   question dix algo  ********** */
    if (data.quesdix == "oui") {
      this.resultService.Numerique = this.resultService.Numerique + 4
    } else if(data.quesdix == "ouienpartie"){
      this.resultService.Numerique = this.resultService.Numerique + 2
    }else {
      this.resultService.Numerique = this.resultService.Numerique + 0
    }
    /***********  fin question dix algo  ********** */

    /***********   question onze algo  ********** */
    if (data.quesonze == "oui") {
      this.resultService.EE =this.resultService.EE + 2;
      this.resultService.CE =this.resultService.CE + 2;
    } else if (data.quesonze == "ouienpartie") {
      this.resultService.Numerique =this.resultService.Numerique + 1;
      this.resultService.CE =this.resultService.CE + 1;
    } else {
      this.resultService.Numerique =this.resultService.Numerique + 0;
      this.resultService.CE =this.resultService.CE + 0;
    }
    /***********  fin question onze algo  ********** */

    /***********   question douze algo  ********** */
    if (data.quesdouze == "oui") {
      this.resultService.Calcul = this.resultService.Calcul + 1;
      this.resultService.RTemps = this.resultService.RTemps + 1;
    } else {
      
      this.resultService.Calcul = this.resultService.Calcul + 0;
      this.resultService.RTemps = this.resultService.RTemps + 0;
    }
    /***********  fin question douze algo  ********** */

    /***********   question treize algo  ********** */
    if (data.questreize == "oui") {
      this.resultService.EE =this.resultService.EE + 1;
    } else {
      this.resultService.EE =this.resultService.EE + 0;
    }
    /***********  fin question treize algo  ********** */
   


    /***********   question quatorze algo  ********** */
    if (data.quesquatorze == "oui") {
      this.resultService.RTemps =this.resultService.RTemps + 1;
    } else{
      this.resultService.RTemps =this.resultService.RTemps + 0;
    }
    /***********  fin question quatorze algo  ********** */
   
  

    
    this.router.navigate(['/SeDeplacerEnVille']);

  }

}
