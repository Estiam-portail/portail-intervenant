import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resultat } from 'src/app/models/resultats.interface';
import { ResultatsService } from 'src/app/services/resultats.service';
import Chart from 'chart.js/auto'
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-allresults',
  templateUrl: './allresults.component.html',
  styleUrls: ['./allresults.component.css']
})
export class AllresultsComponent implements OnInit {
  
  resiltvide: boolean = false;
  radar: boolean = false;
  tableau: boolean = true;
  lienversletableau: boolean = false
  detaiQuestions: boolean = false
  tableaudegres: boolean = false

  //*******    user   ***** */
  public user;
  isUser: boolean = false;
  //  *********   detail candidat   ********//
  DRnom;
  DRprenom;
  DRmyDate;
  DRgenre;
  RDdate
  DRlieuNaissance;
  DRemail
  DRcodePostale
  DRtelephone
  DRdateNaissance
  DRstatus

  //**** detai degres  */

  DReEE
  DReCO 
  DReEO 
  DReCalcul
  DReREspace 
  DReRTemps
  DReNumerique
  DReCE 


  //******************  resultat  */
  DREE;
  DRCO;
  DREO;
  DRCalcul;
  DRREspace;
  DRRTemps;
  DRNumerique
  DRCE;

  // -------------degres -------------->>>>>>>>>>>>>>>>>>>>></>

  degre1DREE: boolean = false;
  degre1DRCO: boolean = false;
  degre1DREO: boolean = false;
  degre1DRCalcul: boolean = false;
  degre1DRREspace: boolean = false;
  degre1DRRTemps: boolean = false;
  degre1DRNumerique
  degre1DRCE: boolean = false;

  degre2DREE: boolean = false;
  degre2DRCO: boolean = false;
  degre2DREO: boolean = false;
  degre2DRCalcul: boolean = false;
  degre2DRREspace: boolean = false;
  degre2DRRTemps: boolean = false;
  degre2DRNumerique : boolean = false;
  degre2DRCE: boolean = false;

  degre3DREE: boolean = false;
  degre3DRCO: boolean = false;
  degre3DREO: boolean = false;
  degre3DRCalcul: boolean = false;
  degre3DRREspace: boolean = false;
  degre3DRRTemps: boolean = false;
  degre3DRNumerique: boolean = false;
  degre3DRCE: boolean = false;

  // ----------------   fin degres -----------------------------


  DRquestionUn;
  DRquestionDeux;
  DRquestionTroix;
  DRquestionQuatre;
  DRquestionCenque;
  DRquestionSix;
  DRquestionSept;
  DRquestionHuit;
  DRquestionNeuf;

  DRquestionDix
  DRquestionOnze
  DRquestionDouze
  DRquestionTreize
  DRquestionQuatorze

  DRquestionQuinze;
  DRquestionSeize;
  DRquestionDixsept;
  DRquestionDixhuit;
  DRquestionDixneuf;
  DRquestionVingt;
  DRquestionVingtun;
  DRquestionVingtdeux;
  DRquestionVingttroix;
  DRquestionVingtquatre;
  DRquestionVingtcenque;
  DRquestionVingtsix;
  DRquestionVingtcept;
  DRquestionVingthuit;

  DRquestionVingtneuf;
  DRquestionTrente;
  DRquestionTrenteun;
  DRquestionTrentedeux;
  DRquestionTrentetroix;
  DRquestionTrentequatre;

  DRquestionTrentecenque;
  DRquestionTrentesix;
  DRquestionTrentecepte;
  DRquestionTrentehuite;
  DRquestionTrenteneuf;
  DRquestionQuarante;
  //!!!!!!!!!!!!!!!!!!!!!

  resultdetai; nom; prenom
  uid
  constructor(private authService: AuthService,
    private db: AngularFirestore,
    private resultService: ResultatsService,
    private router: Router,
    private afauth: AngularFireAuth
  ) {

    this.afauth.user.subscribe(user=>{
      this.uid = user.uid
      
    })
  }


  //::::::::::::::::::
  diag;

  ngOnInit(): void {
    //*******    user   ***** */

    this.authService.user.subscribe(user => {
      if (user) {
        this.isUser = true;
        this.authService.userId = user.uid;
      }
      else this.isUser = false;
      this.user = user

    })
    //*******    fin  user   ***** */


    console.log("ng onit EE" + this.DREE)

    //**********************      select elements *******************************/
    this.resultService.getAllDiagnistiques().subscribe(data => {
      this.diag = data.map(e => {
        return {
          id: e.payload.doc.id,

          EE: e.payload.doc.data()['EE'],
          CO: e.payload.doc.data()['CO'],
          Calcul: e.payload.doc.data()['Calcul'],
          CE: e.payload.doc.data()['CE'],
          EO: e.payload.doc.data()['EO'],
          REspace: e.payload.doc.data()['REspace'],
          RTemps: e.payload.doc.data()['RTemps'],
          Numerique: e.payload.doc.data()['Numerique'],

          nom: e.payload.doc.data()['nom'],
          prenom: e.payload.doc.data()['prenom'],
          myDate: e.payload.doc.data()['myDate'],
          genre: e.payload.doc.data()['genre'],
          uid: e.payload.doc.data()['uid'],
        } as Resultat;
        
      })

      console.log("diag : ", this.diag);
    });

    //   ***********************    fin select  * ****************************************

    // *******************************     radar   *************************************






    //**************************    fin radar    ******************** */
  }

  ///////::::::::::::     deatil    µµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµ
  detail(id) {
    this.resultService.getObjectById(id).get().then(res => {
      this.DRnom = res.data()['nom'];
      this.DRprenom = res.data()['prenom'];
      this.DRgenre = res.data()['genre'];
      this.RDdate = res.data()['myDate'];
      this.DRemail = res.data()['email'];
      this.DRlieuNaissance = res.data()['lieuNaissance'];
      this.DRcodePostale = res.data()['codePostale'];
      this.DRtelephone = res.data()['telephone'];
      this.DRdateNaissance = res.data()['dateNaissance'];
      this.DRstatus = res.data()['status'];

      this.DRquestionUn = res.data()['questionUn'];
      this.DRquestionDeux = res.data()['questionDeux'];
      this.DRquestionTroix = res.data()['questionTroix'];
      this.DRquestionQuatre = res.data()['questionQuatre'];
      this.DRquestionCenque = res.data()['questionCenque'];

      this.DRquestionSix = res.data()['questionSix'];
      this.DRquestionSept = res.data()['questionSept'];
      this.DRquestionHuit = res.data()['questionHuit'];
      this.DRquestionNeuf = res.data()['questionNeuf'];

      this.DRquestionDix = res.data()['questionDix'];
      this.DRquestionOnze = res.data()['questionOnze'];
      this.DRquestionDouze = res.data()['questionDouze'];
      this.DRquestionTreize = res.data()['questionTreize'];
      this.DRquestionQuatorze = res.data()['questionQuatorze'];

      this.DRquestionQuinze = res.data()['questionQuinze'];
      this.DRquestionSeize = res.data()['questionSeize'];
      this.DRquestionDixsept = res.data()['questionDixsept'];
      this.DRquestionDixhuit = res.data()['questionDixhuit'];
      this.DRquestionDixneuf = res.data()['questionDixneuf'];
      this.DRquestionVingt = res.data()['questionVingt'];
      this.DRquestionVingtun = res.data()['questionVingtun'];
      this.DRquestionVingtdeux = res.data()['questionVingtdeux'];
      this.DRquestionVingttroix = res.data()['questionVingttroix'];
      this.DRquestionVingtquatre = res.data()['questionVingtquatre'];
      this.DRquestionVingtcenque = res.data()['questionVingtcenque'];
      this.DRquestionVingtsix = res.data()['questionVingtsix'];
      this.DRquestionVingtcept = res.data()['questionVingtcept'];
      this.DRquestionVingthuit = res.data()['questionVingthuit'];

      this.DRquestionVingtneuf = res.data()['questionVingtneuf'];
      this.DRquestionTrente = res.data()['questionTrente'];
      this.DRquestionTrenteun = res.data()['questionTrenteun'];
      this.DRquestionTrentedeux = res.data()['questionTrentedeux'];
      this.DRquestionTrentetroix = res.data()['questionTrentetroix'];
      this.DRquestionTrentequatre = res.data()['questionTrentequatre'];

      this.DRquestionTrentecenque = res.data()['questionTrentecenque'];
      this.DRquestionTrentesix = res.data()['questionTrentesix'];
      this.DRquestionTrentecepte = res.data()['questionTrentecepte'];
      this.DRquestionTrentehuite = res.data()['questionTrentehuite'];
      this.DRquestionTrenteneuf = res.data()['questionTrenteneuf'];
      this.DRquestionQuarante = res.data()['questionQuarante'];

      this.DReEE = res.data()['EE'];
      this.DReCO = res.data()['CO'];
      this.DReEO = res.data()['EO'];
      this.DReCalcul = res.data()['Calcul'];
      this.DReREspace = res.data()['REspace'];
      this.DReRTemps = res.data()['RTemps'];
      this.DReNumerique = res.data()['Numerique'];
      this.DReCE = res.data()['CE'];


      let DREE = res.data()['EE'];
      let DRCO = res.data()['CO'];
      let DREO = res.data()['EO'];
      let DRCalcul = res.data()['Calcul'];
      let DRREspace = res.data()['REspace'];
      let DRRTemps = res.data()['RTemps'];
      let DRNumerique = res.data()['Numerique'];
      let DRCE = res.data()['CE'];

      // -------------------------------------------------------------------
      if (DREE == 1) {
        this.degre1DREE = true
      } else if (DREE == 2) {
        this.degre2DREE = true
      } else if (DREE == 3) {
        this.degre3DREE = true
      }
      // -------------------------------------------------------------------
      if (DRCO == 1) {
        this.degre1DRCO = true
      } else if (DRCO == 2) {
        this.degre2DRCO = true
      } else if (DRCO == 3) {
        this.degre3DRCO = true
      }
      // -------------------------------------------------------------------
      if (DREO == 1) {
        this.degre1DREO = true
      } else if (DREO == 2) {
        this.degre2DREO = true
      } else if (DREO == 3) {
        this.degre3DREO = true
      }
      // -------------------------------------------------------------------
      if (DRCalcul == 1) {
        this.degre1DRCalcul = true
      } else if (DRCalcul == 2) {
        this.degre2DRCalcul = true
      } else if (DRCalcul == 3) {
        this.degre3DRCalcul = true
      }



      // -------------------------------------------------------------------
      if (DRREspace == 1) {
        this.degre1DRREspace = true
      } else if (DRREspace == 2) {
        this.degre2DRREspace = true
      } else if (DRREspace == 3) {
        this.degre3DRREspace = true
      }

      // -------------------------------------------------------------------
      if (DRREspace == 1) {
        this.degre1DRREspace = true
      } else if (DRREspace == 2) {
        this.degre2DRREspace = true
      } else if (DRREspace == 3) {
        this.degre3DRREspace = true
      }

      // -------------------------------------------------------------------
      if (DRRTemps == 1) {
        this.degre1DRRTemps = true
      } else if (DRRTemps == 2) {
        this.degre2DRRTemps = true
      } else if (DRRTemps == 3) {
        this.degre3DRRTemps = true
      }

      // -------------------------------------------------------------------
      if (DRNumerique == 1) {
        this.degre1DRNumerique = true
      } else if (DRNumerique == 2) {
        this.degre2DRNumerique = true
      } else if (DRNumerique == 3) {
        this.degre3DRNumerique = true
      }
      // -------------------------------------------------------------------


      if (DRCE == 1) {
        this.degre1DRCE = true
      } else if (DRCE == 2) {
        this.degre2DRCE = true
      } else if (DRCE == 3) {
        this.degre3DRCE = true
      }



      // -------------------------------------------------------------------

      this.resiltvide = true;
      this.tableau = false;
      this.radar = true;
      this.lienversletableau = true





      var chart = new Chart('myChart', {
        type: 'radar',
        data: {
          labels: ['COMPREHENSION ECRITE', 'ÉCRIRE',
           'COMPRENDRE à l\'ORAL', 'CALCULER', 'S’EXPRIMER à l’oral',
            'Se repérer dans l’ESPACE', 'Se repérer dans le TEMPS', 
            'Utiliser les outils NUMERIQUES'],
          datasets: [{
            label: ' Résultats en degré',
            data: [
              this.DReCE,
              this.DReEE,
              this.DReCO,
              this.DReCalcul,
              this.DReEO,
              this.DReREspace,
              this.DReRTemps,
              this.DReNumerique],
            backgroundColor: '#a9d7c8',
            borderColor: 'red',
            borderWidth: 1,
            fill: true,
          },
          {
            label: ' ',
            data: [
            ].reverse(),
            backgroundColor: '#a9d7c8',
            borderColor: 'red',
            borderWidth: 1,
            fill: true,
          }
          ]
        },
        options: {
          scales: {
            r: {
              angleLines: {
                display: false
              },
              suggestedMin: 0,
              suggestedMax: 3
            }
          }
        }
      });

    })


  }

  //**********************      delete element *******************************/
  delete(id: string) {
    this.resultService.delete(id);
  }


  userConnecter(id) {
    // let id = this.authService.userId
    // this.authService.userconnecter(id).then(res => {
    //  console.log(res.data()['id']) 
    // })
  }

  retourneauresult() {
    window.location.reload();
    this.router.navigateByUrl('/results')
  }



  afficherresult() {
    this.detaiQuestions = true
    this.tableaudegres = false

  }

  affichertableaudegrer() {
    this.tableaudegres = true
    this.detaiQuestions = false
  }






   
}
