import { Component, OnInit, ViewChild } from "@angular/core";
import { ResultatsService } from "src/app/services/resultats.service";
import Chart from "chart.js/auto";

import { CandidatService } from "src/app/services/candidat.service";
import { Resultat } from "src/app/models/resultats.interface";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
@Component({
  selector: "app-resultat",
  templateUrl: "./resultat.component.html",
  styleUrls: ["./resultat.component.css"],
})
export class ResultatComponent implements OnInit {
  Download: boolean = false;
  radar: boolean = true;
  resultQuestion: boolean = false;
  enregestrerlesresultats: boolean = true;

  DCE: number = 0;
  DEE: number = 0;
  DCO: number = 0;
  DEO: number = 0;
  DCalcul: number = 0;
  DREspace: number = 0;
  DRTemps: number = 0;
  DNumerique: number = 0;
  genre: string;
  prenom: string;
  nom: string;

  month = new Date().getUTCMonth() + 1;
  day = new Date().getUTCDate();
  year = new Date().getUTCFullYear();

  uid;
  constructor(
    public resultService: ResultatsService,
    public candidatService: CandidatService,
    private router: Router,
    private afauth: AngularFireAuth
  ) {
    this.afauth.user.subscribe((user) => {
      this.uid = user.uid;
    });

    if (this.resultService.CE >= 0 && this.resultService.CE <= 8) {
      this.DCE = 1;
      localStorage.setItem("DCE", JSON.stringify(this.DCE));
    } else if (this.resultService.CE > 8 && this.resultService.CE <= 13) {
      this.DCE = 2;
      localStorage.setItem("DCE", JSON.stringify(this.DCE));
    } else {
      this.DCE = 3;
      localStorage.setItem("DCE", JSON.stringify(this.DCE));
    }
    //////////////////////////////////////////////////////////////////

    if (this.resultService.EE >= 0 && this.resultService.EE <= 3) {
      this.DEE = 1;
      localStorage.setItem("DEE", JSON.stringify(this.DEE));
    } else if (this.resultService.EE > 3 && this.resultService.EE < 6) {
      this.DEE = 2;
      localStorage.setItem("DEE", JSON.stringify(this.DEE));
    } else {
      this.DEE = 3;
      localStorage.setItem("DEE", JSON.stringify(this.DEE));
    }
    //////////////////////////////////////////////////////////////////

    if (this.resultService.CO >= 0 && this.resultService.CO <= 9) {
      this.DCO = 1;
      localStorage.setItem("DCO", JSON.stringify(this.DCO));
    } else if (this.resultService.CO > 9 && this.resultService.CO <= 14) {
      this.DCO = 2;
      localStorage.setItem("DCO", JSON.stringify(this.DCO));
    } else {
      this.DCO = 3;
      localStorage.setItem("DCO", JSON.stringify(this.DCO));
    }
    //////////////////////////////////////////////////////////////////

    if (this.resultService.Calcul >= 0 && this.resultService.Calcul <= 5) {
      this.DCalcul = 1;
      localStorage.setItem("DCalcul", JSON.stringify(this.DCalcul));
    } else if (
      this.resultService.Calcul > 5 &&
      this.resultService.Calcul <= 13
    ) {
      this.DCalcul = 2;
      localStorage.setItem("DCalcul", JSON.stringify(this.DCalcul));
    } else {
      this.DCalcul = 3;
      localStorage.setItem("DCalcul", JSON.stringify(this.DCalcul));
    }
    //////////////////////////////////////////////////////////////////

    if (this.resultService.EO >= 0 && this.resultService.EO <= 8) {
      this.DEO = 1;
      localStorage.setItem("DEO", JSON.stringify(this.DEO));
    } else if (this.resultService.EO > 8 && this.resultService.EO <= 15) {
      this.DEO = 2;
      localStorage.setItem("DEO", JSON.stringify(this.DEO));
    } else {
      this.DEO = 3;
      localStorage.setItem("DEO", JSON.stringify(this.DEO));
    }
    //////////////////////////////////////////////////////////////////

    if (this.resultService.REspace >= 0 && this.resultService.REspace <= 6) {
      this.DREspace = 1;
      localStorage.setItem("DREspace", JSON.stringify(this.DREspace));
    } else if (
      this.resultService.REspace > 6 &&
      this.resultService.REspace <= 8
    ) {
      this.DREspace = 2;
      localStorage.setItem("DREspace", JSON.stringify(this.DREspace));
    } else {
      this.DREspace = 3;
      localStorage.setItem("DREspace", JSON.stringify(this.DREspace));
    }
    //////////////////////////////////////////////////////////////////
    this.resultService.RTemps;
    if (this.resultService.RTemps >= 0 && this.resultService.RTemps <= 6) {
      this.DRTemps = 1;
      localStorage.setItem("DRTemps", JSON.stringify(this.DRTemps));
    } else if (
      this.resultService.RTemps > 6 &&
      this.resultService.RTemps <= 10
    ) {
      this.DRTemps = 2;
      localStorage.setItem("DRTemps", JSON.stringify(this.DRTemps));
    } else {
      this.DRTemps = 3;
      localStorage.setItem("DRTemps", JSON.stringify(this.DRTemps));
    }
    //////////////////////////////////////////////////////////////////

    if (
      this.resultService.Numerique >= 0 &&
      this.resultService.Numerique <= 5
    ) {
      this.DNumerique = 1;
      localStorage.setItem("DNumerique", JSON.stringify(this.DNumerique));
    } else if (
      this.resultService.Numerique > 5 &&
      this.resultService.Numerique <= 9
    ) {
      this.DNumerique = 2;
      localStorage.setItem("DNumerique", JSON.stringify(this.DNumerique));
    } else {
      this.DNumerique = 3;
      localStorage.setItem("DNumerique", JSON.stringify(this.DNumerique));
    }

    this.genre = this.resultService.genre;
    this.nom = this.resultService.nom;
    this.prenom = this.resultService.prenom;
  }

  ngOnInit(): void {
    console.log(
      "CE:",
      this.DEO,
      "CO:",
      this.DCE,
      "Calcul:",
      this.DCalcul,
      " EE:",
      this.DEE,
      " EO:",
      this.DEO,
      "Numerique:",
      this.DNumerique,
      "REspace: ",
      this.DREspace,
      "RTemps:",
      this.DRTemps
    );
    var chart = new Chart("myChart", {
      type: "radar",
      data: {
        labels: [
          "COMPREHENSION ECRITE",
          "ÉCRIRE",
          "COMPRENDRE à l'ORAL",
          "CALCULER",
          "S’EXPRIMER à l’oral",
          "Se repérer dans l’ESPACE",
          "Se repérer dans le TEMPS",
          "Utiliser les outils NUMERIQUES",
        ],
        datasets: [
          {
            label: " Résultats en degré ",
            data: [
              this.DCE,
              this.DEE,
              this.DCO,
              this.DCalcul,
              this.DEO,
              this.DREspace,
              this.DRTemps,
              this.DNumerique,
            ],
            backgroundColor: "#a9d7c8",
            borderColor: "red",
            borderWidth: 1,
            fill: true,
          },
          {
            label: " ",
            data: [].reverse(),
            backgroundColor: "#a9d7c8",
            borderColor: "red",
            borderWidth: 1,
            fill: true,
          },
        ],
      },
      options: {
        scales: {
          r: {
            angleLines: {
              display: false,
            },
            suggestedMin: 0,
            suggestedMax: 3,
          },
        },
      },
    });
  }

  detaiquestion() {
    this.radar = false;
    this.resultQuestion = true;
  }

  enregestrerlesresultat() {
    let uid = this.uid;
    console.log("uid local strog : ", uid);
    //  this.router.navigate(['/results'])
    let results: Resultat = {
      uid: this.uid,

      //partie marche
      // CE: this.resultService.CE,
      // CO: this.resultService.CO,
      // Calcul: this.resultService.Calcul,
      // EE: this.resultService.EE,
      // EO: this.resultService.EO,
      // Numerique: this.resultService.Numerique,
      // REspace: this.resultService.REspace,
      // RTemps: this.resultService.RTemps,
      // --- fin partie marche

      // ----------------------debut algo ---------------------------------

      // -------------------------fin --------------------

      //  ,les question localstoryg
      questionUn: localStorage.getItem("questionUn"),
      questionDeux: localStorage.getItem("questionDeux"),
      questionTroix: localStorage.getItem("questionTroix"),
      questionQuatre: localStorage.getItem("questionQuatre"),
      questionCenque: localStorage.getItem("questionCenque"),

      questionSix: localStorage.getItem("questionSix"),
      questionSept: localStorage.getItem("questionSept"),
      questionHuit: localStorage.getItem("questionHuit"),
      questionNeuf: localStorage.getItem("questionNeuf"),

      questionDix: localStorage.getItem("questionDix"),
      questionOnze: localStorage.getItem("questionOnze"),
      questionDouze: localStorage.getItem("questionDouze"),
      questionTreize: localStorage.getItem("questionTreize"),
      questionQuatorze: localStorage.getItem("questionQuatorze"),

      questionQuinze: localStorage.getItem("questionQuinze"),
      questionSeize: localStorage.getItem("questionSeize"),
      questionDixsept: localStorage.getItem("questionDixsept"),
      questionDixhuit: localStorage.getItem("questionDixhuit"),
      questionDixneuf: localStorage.getItem("questionDixneuf"),
      questionVingt: localStorage.getItem("questionVingt"),
      questionVingtun: localStorage.getItem("questionVingtun"),
      questionVingtdeux: localStorage.getItem("questionVingtdeux"),
      questionVingttroix: localStorage.getItem("questionVingttroix"),
      questionVingtquatre: localStorage.getItem("questionVingtquatre"),
      questionVingtcenque: localStorage.getItem("questionVingtcenque"),
      questionVingtsix: localStorage.getItem("questionVingtsix"),
      questionVingtcept: localStorage.getItem("questionVingtcept"),
      questionVingthuit: localStorage.getItem("questionVingthuit"),

      questionVingtneuf: localStorage.getItem("questionVingtneuf"),
      questionTrente: localStorage.getItem("questionTrente"),
      questionTrenteun: localStorage.getItem("questionTrenteun"),
      questionTrentedeux: localStorage.getItem("questionTrentedeux"),
      questionTrentetroix: localStorage.getItem("questionTrentetroix"),
      questionTrentequatre: localStorage.getItem("questionTrentequatre"),

      questionTrentecenque: localStorage.getItem("questionTrentecenque"),
      questionTrentesix: localStorage.getItem("questionTrentesix"),
      questionTrentecepte: localStorage.getItem("questionTrentecepte"),
      questionTrentehuite: localStorage.getItem("questionTrentehuite"),
      questionTrenteneuf: localStorage.getItem("questionTrenteneuf"),
      questionQuarante: localStorage.getItem("questionQuarante"),

      //fin local storyg

      genre: this.resultService.genre,
      prenom: this.resultService.prenom,
      nom: this.resultService.nom,

      myDate: this.year + "/" + this.month + "/" + this.day,

      telephone: this.resultService.telephone,
      email: this.resultService.email,
      codePostale: this.resultService.codePostale,
      lieuNaissance: this.resultService.lieuNaissance,
      dateNaissance: this.resultService.dateNaissance,
      status: this.resultService.status,
      emailaccompagnateur: this.resultService.status,

      CE: this.DCE,
      CO: this.DCO,
      Calcul: this.DCalcul,
      EE: this.DEE,
      EO: this.DEO,
      Numerique: this.DNumerique,
      REspace: this.DREspace,
      RTemps: this.DRTemps,
    };

    console.log(
      "CE:",
      this.DEO,
      "CO:",
      this.DCE,
      "Calcul:",
      this.DCalcul,
      " EE:",
      this.DEE,
      " EO:",
      this.DEO,
      "Numerique:",
      this.DNumerique,
      "REspace: ",
      this.DREspace,
      "RTemps:",
      this.DRTemps
    );

    // console.log("this result " + this.resultats.CE)

    console.log("memmem /// ...");
    this.resultService
      .result(results)
      .then((res) => {
        
        alert("Les resultats sont bien enregistrés !");
        this.enregestrerlesresultats = false;

        // vider local storyge

        localStorage.removeItem("questionun");
        localStorage.removeItem("valeurQuestionUn");
        localStorage.removeItem("valeurQuestiondeux");
        localStorage.removeItem("valeurQuestiontroix");
        localStorage.removeItem("valeurQuestionquatre");
        localStorage.removeItem("valeurQuestioncenque");
        localStorage.removeItem("valeurQuestionsix");
        localStorage.removeItem("valeurQuestionsept");
        localStorage.removeItem("valeurQuestionhuit");
        localStorage.removeItem("valeurQuestionneuf");
        localStorage.removeItem("valeurQuestiondix");
        localStorage.removeItem("valeurQuestiononze");
        localStorage.removeItem("valeurQuestiondouze");
        localStorage.removeItem("valeurQuestiontreize");
        localStorage.removeItem("valeurQuestionquatorze");
        localStorage.removeItem("questionquinze");
        localStorage.removeItem("questionseize");
        localStorage.removeItem("questiondixsept");
        localStorage.removeItem("questiondixhuit");
        localStorage.removeItem("questiondixneuf");
        localStorage.removeItem("questionvingt");
        localStorage.removeItem("questionvingtun");
        localStorage.removeItem("questionvingtdeux");
        localStorage.removeItem("questionvingtroix");
        localStorage.removeItem("questionvingtquatre");
        localStorage.removeItem("questionvingtcenque");
        localStorage.removeItem("questionvingtsix");
        localStorage.removeItem("questionvingtcept");
        localStorage.removeItem("questionvingthuit");
        localStorage.removeItem("questionvingtneuf");
        localStorage.removeItem("valeurQuesvingtneuf");
        localStorage.removeItem("valeurQuestiontrente");
        localStorage.removeItem("valeurQuestiontrenteun");
        localStorage.removeItem("valeurQuestiontrentedeux");
        localStorage.removeItem("valeurQuestiontrentetroix");
        localStorage.removeItem("valeurQuestiontrentequatre");
        localStorage.removeItem("questiontrentecenque");
        localStorage.removeItem("questrentesix");
        localStorage.removeItem("questrentecepte");
        localStorage.removeItem("questrentehuite");
        localStorage.removeItem("questrenteneuf");
        localStorage.removeItem("quesquarante");

        localStorage.removeItem("compt");

        localStorage.removeItem("comptServiceCompteur");

        localStorage.removeItem("nom");
        localStorage.removeItem("prenom"),
          localStorage.removeItem("genre"),
          localStorage.removeItem("telephone"),
          localStorage.removeItem("email"),
          localStorage.removeItem("codePostale"),
          localStorage.removeItem("lieuNaissance"),
          localStorage.removeItem("dateNaissance"),
          localStorage.removeItem("adresse"),
          localStorage.removeItem("ville"),
          localStorage.removeItem("metier"),
          localStorage.removeItem("status");
        localStorage.removeItem("autre");
        localStorage.removeItem("dateEmploi");

        // fin vide localstoryge
        console.log("..... tatat .... ");
      })
      .catch((err) => {
        console.log("Vous avez un erreur !" + err);
        console.log("tatat .... ");
        ("tata .. ")
      });
      console.log("ttttt .....");
      
  }

  // PDF button .........

  buck() {
    this.router.navigate(["/offreDemploi"]);
  }
}
