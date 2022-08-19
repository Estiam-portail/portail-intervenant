import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultatsService } from 'src/app/services/resultats.service';

@Component({
  selector: 'app-activiteidentitie',
  templateUrl: './activiteidentitie.component.html',
  styleUrls: ['./activiteidentitie.component.css']
})
export class ActiviteidentitieComponent implements OnInit {
  rensform1: boolean = false;
  rensform2: boolean = false;
  questionhuit:boolean = false;
  constructor(private resultService: ResultatsService, private router: Router) { }
 
  ngOnInit(): void {
  }

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
    } else {
      this.resultService.Numerique = this.resultService.Numerique + 0
    }
    /***********  fin question six algo  ********** */

    /***********   question sept algo  ********** */
    if (data.quessept == "oui") {
      this.resultService.Numerique = this.resultService.Numerique + 2;
    } else if (data.quesdeux == "ouienpartie") {
      this.resultService.Numerique = this.resultService.Numerique + 1;
    } else {
      this.resultService.Numerique = this.resultService.Numerique + 0;
    }
    /***********  fin question cept algo  ********** */

    /***********   question huit algo  ********** */
    if (data.queshuit == "oui") {
      this.resultService.Numerique = this.resultService.Numerique + 3;
    } else {
      this.resultService.Numerique = this.resultService.Numerique + 0;
    }
    /***********  fin question huit algo  ********** */

    /***********   question neuf algo  ********** */
    if (data.quesneuf == "oui") {
      this.resultService.Numerique = this.resultService.Numerique + 1;
      this.rensform1 = true;

    } else if (data.quesneuf == "ouienpartie") {
      this.resultService.Numerique = this.resultService.Numerique + 0,5;
    } else {
      this.resultService.Numerique = this.resultService.Numerique + 0;
    }
    /***********  fin question neuf algo  ********** */

    this.router.navigate(['/identity']);

    console.log(
      " , EO : " + this.resultService.EO
    )

    console.log("normalement,  numirique 7:,  et CO : , E0:   ")
  }


}
