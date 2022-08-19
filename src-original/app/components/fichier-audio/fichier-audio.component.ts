import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultatsService } from 'src/app/services/resultats.service';

@Component({
  selector: 'app-fichier-audio',
  templateUrl: './fichier-audio.component.html',
  styleUrls: ['./fichier-audio.component.css']
})
export class FichierAudioComponent implements OnInit {



  constructor(private resultService: ResultatsService, private router: Router) { }

  ngOnInit(): void {
  }

  ficheAudio(f) {
    let data = f.value
    /***********   question un algo  ********** */
    if (data.quesUn == "oui") {
      this.resultService.Numerique = this.resultService.Numerique + 1
    } else {
      this.resultService.Numerique = this.resultService.Numerique + 0
    }
    /***********  fin question un algo  ********** */

    /***********   question deux algo  ********** */
    if (data.quesDeux == "oui") {
      this.resultService.CO = this.resultService.CO + 4;
      this.resultService.EO = this.resultService.EO + 3
    } else if (data.quesdeux == "ouienpartie") {
      this.resultService.CO = this.resultService.CO + 2;
      this.resultService.EO = this.resultService.EO + 1, 5
    } else {
      this.resultService.CO = this.resultService.CO + 0;
      this.resultService.EO = this.resultService.EO + 0;
    }
    /***********  fin question deux algo  ********** */

    /***********   question troix algo  ********** */
    if (data.quesTroix == "oui") {
      this.resultService.Numerique = this.resultService.Numerique + 2;
    } else if (data.quesTroix == "ouienpartie") {
      this.resultService.Numerique = this.resultService.Numerique + 1;
    } else {
      this.resultService.Numerique = this.resultService.Numerique + 0;
    }
    /***********  fin question troix algo  ********** */

    /***********   question Quatre algo  ********** */
    if (data.quesQuatre == "oui") {
      this.resultService.CO = this.resultService.CO + 3;
    } else if (data.quesQuatre == "ouienpartie") {
      this.resultService.CO = this.resultService.CO + 1, 5;
    } else {
      this.resultService.CO = this.resultService.CO + 0;
    }
    /***********  fin question Quatre algo  ********** */

    /***********   question cenque algo  ********** */
    if (data.quesCenque == "oui") {
      this.resultService.EO = this.resultService.EO + 6;
      this.resultService.CO = this.resultService.CO + 4;
    } else if (data.quesCenque == "ouienpartie") {
      this.resultService.EO = this.resultService.EO + 3;
      this.resultService.CO = this.resultService.CO + 2;
    } else {
      this.resultService.EO = this.resultService.EO + 0;
      this.resultService.CO = this.resultService.CO + 0;
    }
    /***********  fin question cenque algo  ********** */

    console.log(
      " , EO : " + this.resultService.EO
    );
    console.log("normalement,E0: 9  ")
    this.router.navigate(['/activiteidentitie']);
  }

  /**********************   fin meethode fiche audio  *********************** */
}
