import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiviteidentitieComponent } from './components/activiteidentitie/activiteidentitie.component';
import { ActiviteidentitiesuiteComponent } from './components/activiteidentitiesuite/activiteidentitiesuite.component';
import { AllresultsComponent } from './components/allresults/allresults.component';
import { DetailQuestionsComponent } from './components/detail-questions/detail-questions.component';

import { FichierAudioComponent } from './components/fichier-audio/fichier-audio.component';

import { HomeComponent } from './components/home/home.component';
import { IdentiyComponent } from './components/identiy/identiy.component';
import { LoginComponent } from './components/login/login.component';
import { MondeDuTravailComponent } from './components/monde-du-travail/monde-du-travail.component';
import { OffreDemploiComponent } from './components/offre-demploi/offre-demploi.component';
import { RegisterComponent } from './components/register/register.component';
import { RestmotdepasseComponent } from './components/restmotdepasse/restmotdepasse.component';
import { ResultatComponent } from './components/resultat/resultat.component';
import { SeDeplacerEnVilleComponent } from './components/se-deplacer-en-ville/se-deplacer-en-ville.component';
import { TestComponent } from './components/test/test.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'identity', component: IdentiyComponent},
  {path: 'fichierAudio', component: FichierAudioComponent},
  {path: 'activiteidentite', component: ActiviteidentitieComponent},
  {path: 'activiteidentitesuite', component: ActiviteidentitiesuiteComponent},
  {path: 'SeDeplacerEnVille', component: SeDeplacerEnVilleComponent},
  {path: 'mondeDuTravail', component: MondeDuTravailComponent},
  {path: 'offreDemploi', component: OffreDemploiComponent},
  {path: 'result', component: ResultatComponent},
  {path: 'results', component: AllresultsComponent},
  {path: 'deatailQuestions', component: DetailQuestionsComponent},
  {path: 'restmotdepasse', component: RestmotdepasseComponent},
  {path: 'admin', component: TestComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
