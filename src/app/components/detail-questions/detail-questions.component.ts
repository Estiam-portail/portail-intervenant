import { Component, OnInit } from '@angular/core';
import { ResultatsService } from 'src/app/services/resultats.service';

@Component({
  selector: 'app-detail-questions',
  templateUrl: './detail-questions.component.html',
  styleUrls: ['./detail-questions.component.css']
})
export class DetailQuestionsComponent implements OnInit {
  questionUn;
  questionDeux;
  questionTroix;
  questionQuatre;
  questionCenque;
  questionSix;questionSept;questionHuit;questionNeuf;
  questionDix;questionOnze;questionDouze;questionTreize;questionQuatorze
  questionQuinze;questionSeize;questionDixsept;questionDixhuit;questionDixneuf;
  questionVingt;questionVingtun;questionVingtdeux;questionVingttroix;questionVingtquatre;
  questionVingtcenque;questionVingtsix;questionVingtcept;questionVingthuit
  questionVingtneuf;questionTrente;questionTrenteun;
  questionTrentedeux;questionTrentetroix;questionTrentequatre
  questionTrentecenque;questionTrentesix;questionTrentecepte;
  questionTrentehuite;questionTrenteneuf;questionQuarante
  constructor(private resultService : ResultatsService) {
    // this.questionUn = localStorage.getItem("questionUn");
    console.log(" constructeur local strorj " , this.questionUn) 

   }
  ngOnInit(): void {
    this.questionUn = localStorage.getItem("questionUn");
    this.questionDeux = localStorage.getItem("questionDeux");
    this.questionTroix = localStorage.getItem("questionTroix");
    this.questionQuatre = localStorage.getItem("questionQuatre");
    this.questionCenque = localStorage.getItem("questionCenque");

    this.questionSix = localStorage.getItem("questionSix");
    this.questionSept = localStorage.getItem("questionSept");
    this.questionHuit = localStorage.getItem("questionHuit");
    this.questionNeuf = localStorage.getItem("questionNeuf");

    this.questionDix = localStorage.getItem("questionDix");
    this.questionOnze = localStorage.getItem("questionOnze");
    this.questionDouze = localStorage.getItem("questionDouze");
    this.questionTreize = localStorage.getItem("questionTreize");
    this.questionQuatorze = localStorage.getItem("questionQuatorze");

    this.questionQuinze = localStorage.getItem("questionQuinze")
    this.questionSeize = localStorage.getItem("questionSeize")
    this.questionDixsept = localStorage.getItem("questionDixsept")
    this.questionDixhuit = localStorage.getItem("questionDixhuit")
    this.questionDixneuf = localStorage.getItem("questionDixneuf")
    this.questionVingt = localStorage.getItem("questionVingt")
    this.questionVingtun = localStorage.getItem("questionVingtun")
    this.questionVingtdeux = localStorage.getItem("questionVingtdeux")
    this.questionVingttroix = localStorage.getItem("questionVingttroix")
    this.questionVingtquatre = localStorage.getItem("questionVingtquatre")
    this.questionVingtcenque = localStorage.getItem("questionVingtcenque")
    this.questionVingtsix = localStorage.getItem("questionVingtsix")
    this.questionVingtcept = localStorage.getItem("questionVingtcept")
    this.questionVingthuit = localStorage.getItem("questionVingthuit")


    this.questionVingtneuf = localStorage.getItem("questionVingtneuf");
    this.questionTrente = localStorage.getItem("questionTrente");
    this.questionTrenteun = localStorage.getItem("questionTrenteun");
    this.questionTrentedeux = localStorage.getItem("questionTrentedeux");
    this.questionTrentetroix = localStorage.getItem("questionTrentetroix");
    this.questionTrentequatre = localStorage.getItem("questionTrentequatre");

    this.questionTrentecenque = localStorage.getItem("questionTrentecenque");
    this.questionTrentesix = localStorage.getItem("questionTrentesix")
    this.questionTrentecepte = localStorage.getItem("questionTrentecepte")
    this.questionTrentehuite = localStorage.getItem("questionTrentehuite")
    this.questionTrenteneuf = localStorage.getItem("questionTrenteneuf")
    this.questionQuarante = localStorage.getItem("questionQuarante")

  }


}
