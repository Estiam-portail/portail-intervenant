import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { GenerateContractComponent } from './components/generate-contract/generate-contract.component';
import { InformationsIntervenantComponent } from './components/personne-morale/informations-intervenant/informations-intervenant.component';
import { RibIbanBicComponent } from './components/personne-morale/rib-iban-bic/rib-iban-bic.component';
import { CopieCetComponent } from './components/personne-morale/copie-cet/copie-cet.component';
import { AttestationAssuranceRCComponent } from './components/personne-morale/attestation-assurance-rc/attestation-assurance-rc.component';
import { AttestationURSSAFRSIMSAComponent } from './components/personne-morale/attestation-urssaf-rsi-msa/attestation-urssaf-rsi-msa.component';
import { CopieExtraitComponent } from './components/personne-morale/copie-extrait/copie-extrait.component';
import { GetDocumentsPersonneMoraleComponent } from './components/get-documents-personne-morale/get-documents-personne-morale.component';
import { InformationIntervenantComponent } from './components/travailleur-independant-autoentrepreneur/information-intervenant/information-intervenant.component';
import { CvComponent } from './components/travailleur-independant-autoentrepreneur/cv/cv.component';
import { CarteIdentitieComponent } from './components/travailleur-independant-autoentrepreneur/carte-identitie/carte-identitie.component';
import { CarteVitaleScComponent } from './components/travailleur-independant-autoentrepreneur/carte-vitale-sc/carte-vitale-sc.component';
import { ExtraitCasierJudiciaireComponent } from './components/travailleur-independant-autoentrepreneur/extrait-casier-judiciaire/extrait-casier-judiciaire.component';
import { AttestationUrsafRsiComponent } from './components/travailleur-independant-autoentrepreneur/attestation-ursaf-rsi/attestation-ursaf-rsi.component';
import { RibIbanComponent } from './components/travailleur-independant-autoentrepreneur/rib-iban/rib-iban.component';
import { OrdreProfessionnelComponent } from './components/travailleur-independant-autoentrepreneur/ordre-professionnel/ordre-professionnel.component';
import { OrganismeFormationComponent } from './components/travailleur-independant-autoentrepreneur/organisme-formation/organisme-formation.component';
import { AttestationPrecisantComponent } from './components/travailleur-independant-autoentrepreneur/attestation-precisant/attestation-precisant.component';
import { AttestationImpotsComponent } from './components/travailleur-independant-autoentrepreneur/assujettissement-cet/attestation-impots/attestation-impots.component';
import { TroisAvisImpositionComponent } from './components/travailleur-independant-autoentrepreneur/assujettissement-cet/trois-avis-imposition/trois-avis-imposition.component';
import { CopiecetAutoComponent } from './components/travailleur-independant-autoentrepreneur/copiecet-auto/copiecet-auto.component';
import { GetDocumentsTravailleurIndependantComponent } from './components/get-documents-travailleur-independant/get-documents-travailleur-independant.component';
import { AssujettissementCetComponent } from './components/travailleur-independant-autoentrepreneur/assujettissement-cet/assujettissement-cet.component';
import { DetailsComponent } from './components/get-documents-travailleur-independant/details/details.component';
import { DetailComponent } from './components/get-documents-personne-morale/detail/detail.component';

import { SaveEmploisComponent } from './components/offre-emplois/save-emplois/save-emplois.component';
import { SelectEmploisComponent } from './components/offre-emplois/select-emplois/select-emplois.component';
import { SelectibyUidComponent } from './components/offre-emplois/select-emplois/selectiby-uid/selectiby-uid.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { CreateEmploisComponent } from './components/offre-emplois/create-emplois/create-emplois.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    NavbarComponent,
    HomepageComponent,
    GenerateContractComponent,
    InformationsIntervenantComponent,
    RibIbanBicComponent,
    CopieCetComponent,
    AttestationAssuranceRCComponent,
    AttestationURSSAFRSIMSAComponent,
    CopieExtraitComponent,
    GetDocumentsPersonneMoraleComponent,
    InformationIntervenantComponent,
    CvComponent,
    CarteIdentitieComponent,
    CarteVitaleScComponent,
    ExtraitCasierJudiciaireComponent,
    AttestationUrsafRsiComponent,
    RibIbanComponent,
    OrdreProfessionnelComponent,
    OrganismeFormationComponent,
    AttestationPrecisantComponent,
    AttestationImpotsComponent,
    TroisAvisImpositionComponent,
    CopiecetAutoComponent,
    GetDocumentsTravailleurIndependantComponent,
    AssujettissementCetComponent,
    DetailsComponent,
    DetailComponent,
    SaveEmploisComponent,
    SelectEmploisComponent,
    SelectibyUidComponent,
    ListUsersComponent,
    CreateEmploisComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAD8NweGsCPKblvqKEndb4aGykk1k4XQOE",
    authDomain: "portailintervenant.firebaseapp.com",
  projectId: "portailintervenant",
  storageBucket: "portailintervenant.appspot.com",
  messagingSenderId: "969657695909",
  appId: "1:969657695909:web:f1adc1289e5aa22e91974c"
    }),
    ReactiveFormsModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
