import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { GenerateContractComponent } from './components/generate-contract/generate-contract.component';
import { SendDocumentsComponent } from './components/send-documents/send-documents.component';
// mport { InformationsIntervenantComponent } from './components/travailleur-indépendant/informations-intervenant/informations-intervenant.component';
import { RibIbanBicComponent } from './components/personne-morale/rib-iban-bic/rib-iban-bic.component';
import { CopieCetComponent } from './components/personne-morale/copie-cet/copie-cet.component';
import { AttestationAssuranceRCComponent } from './components/personne-morale/attestation-assurance-rc/attestation-assurance-rc.component';
import { AttestationURSSAFRSIMSAComponent } from './components/personne-morale/attestation-urssaf-rsi-msa/attestation-urssaf-rsi-msa.component';
import { CopieExtraitComponent } from './components/personne-morale/copie-extrait/copie-extrait.component';
import { InformationsIntervenantComponent } from './components/personne-morale/informations-intervenant/informations-intervenant.component';
import { GetDocumentsPersonneMoraleComponent } from './components/get-documents-personne-morale/get-documents-personne-morale.component';
import { InformationIntervenantComponent } from './components/travailleur-independant-autoentrepreneur/information-intervenant/information-intervenant.component';
import { CvComponent } from './components/travailleur-independant-autoentrepreneur/cv/cv.component';
import { CarteIdentitieComponent } from './components/travailleur-independant-autoentrepreneur/carte-identitie/carte-identitie.component';
import { CarteVitaleScComponent } from './components/travailleur-independant-autoentrepreneur/carte-vitale-sc/carte-vitale-sc.component';
import { ExtraitCasierJudiciaireComponent } from './components/travailleur-independant-autoentrepreneur/extrait-casier-judiciaire/extrait-casier-judiciaire.component';
import { AttestationUrsafRsiComponent } from './components/travailleur-independant-autoentrepreneur/attestation-ursaf-rsi/attestation-ursaf-rsi.component';
import { RibIbanComponent } from './components/travailleur-independant-autoentrepreneur/rib-iban/rib-iban.component';
import { OrdreProfessionnelComponent } from './components/travailleur-independant-autoentrepreneur/ordre-professionnel/ordre-professionnel.component';
import { CopiecetAutoComponent } from './components/travailleur-independant-autoentrepreneur/copiecet-auto/copiecet-auto.component';
import { AttestationPrecisantComponent } from './components/travailleur-independant-autoentrepreneur/attestation-precisant/attestation-precisant.component';
import { AssujettissementCetComponent } from './components/travailleur-independant-autoentrepreneur/assujettissement-cet/assujettissement-cet.component';
import { AttestationImpotsComponent } from './components/travailleur-independant-autoentrepreneur/assujettissement-cet/attestation-impots/attestation-impots.component';
import { TroisAvisImpositionComponent } from './components/travailleur-independant-autoentrepreneur/assujettissement-cet/trois-avis-imposition/trois-avis-imposition.component';
import { GetDocumentsTravailleurIndependantComponent } from './components/get-documents-travailleur-independant/get-documents-travailleur-independant.component';
import { DetailsComponent } from './components/get-documents-travailleur-independant/details/details.component';
import { DetailComponent } from './components/get-documents-personne-morale/detail/detail.component';
import { SaveEmploisComponent } from './components/offre-emplois/save-emplois/save-emplois.component';
import { SelectEmploisComponent } from './components/offre-emplois/select-emplois/select-emplois.component';
import { SelectibyUidComponent } from './components/offre-emplois/select-emplois/selectiby-uid/selectiby-uid.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { CreateEmploisComponent } from './components/offre-emplois/create-emplois/create-emplois.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'GenerateContract', component: GenerateContractComponent },
  { path: 'SendDocuments', component: SendDocumentsComponent },
  // { path: 'CopieExtraitPersonneNormale', component: CopieExtraitPersonneNormaleComponent },
  { path: 'InformationsIntervenant', component: InformationsIntervenantComponent },

  { path: 'CopieExtrait', component: CopieExtraitComponent },
  { path: 'RibIbanBicComponent', component: RibIbanBicComponent },
  { path: 'copierContributionÉconomiqueTerritoriale', component: CopieCetComponent },
  { path: 'AttestationAssuranceRC', component: AttestationAssuranceRCComponent },
  { path: 'AttestationURSSAFRSIMSA', component: AttestationURSSAFRSIMSAComponent },
  { path: 'getDocumentsPersonneMorale', component: GetDocumentsPersonneMoraleComponent },
  // { path: 'InformationIntervenant', component: InformationIntervenantComponent },
  { path: 'GetDocumentsTravailleurIndependant', component: GetDocumentsTravailleurIndependantComponent },
  { path: 'users', component: ListUsersComponent },
  { path: 'GetDocumentsTravailleurIndependantDetail/:id', component: DetailsComponent },
  { path: 'GetDocumentsPersonneMoraleDetail/:id', component: DetailComponent },

  // ***********************   path travailleur indipendant **************************
  {
    path: 'travailleurIndependant',
    children: [
      { path: 'InformationIntervenant', component: InformationIntervenantComponent },
      { path: 'cv', component: CvComponent },
      { path: 'CarteIdentitie', component: CarteIdentitieComponent },
      { path: 'CarteVitale', component: CarteVitaleScComponent },
      { path: 'ExtraitCasierJudiciaire', component: ExtraitCasierJudiciaireComponent },
      { path: 'AttestationUrsafRsi', component: AttestationUrsafRsiComponent },
      { path: 'RibIban', component: RibIbanComponent },
      { path: 'OrdreProfessionnel', component: OrdreProfessionnelComponent },
      { path: 'CopiecetAuto', component: CopiecetAutoComponent },
      { path: 'AttestationPrecisant', component: AttestationPrecisantComponent },
      { path: 'AssujettissementCet', component: AssujettissementCetComponent },
      // ********************  assujettissemnt *******************************
      { path: 'AttestationImpots', component: AttestationImpotsComponent },
      { path: 'TroisAvisImposition', component: TroisAvisImpositionComponent },

    ],
  },// ***********************   path travailleur indipendant **************************
  {
    path: 'emplois',
    children: [
      { path: 'save-emplois', component: SaveEmploisComponent },
      { path: 'select-emplois', component: SelectEmploisComponent },
      { path: 'select-emplois/:id', component: SelectibyUidComponent },
      { path: 'create-emplois', component: CreateEmploisComponent },
    ],
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
