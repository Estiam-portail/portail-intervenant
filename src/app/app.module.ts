import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { IdentiyComponent } from './components/identiy/identiy.component';
import { FooterComponent } from './components/footer/footer.component';
import { FichierAudioComponent } from './components/fichier-audio/fichier-audio.component';
import { SeDeplacerEnVilleComponent } from './components/se-deplacer-en-ville/se-deplacer-en-ville.component';
import { MondeDuTravailComponent } from './components/monde-du-travail/monde-du-travail.component';
import { OffreDemploiComponent } from './components/offre-demploi/offre-demploi.component';
import { ActiviteidentitieComponent } from './components/activiteidentitie/activiteidentitie.component';
import { ActiviteidentitiesuiteComponent } from './components/activiteidentitiesuite/activiteidentitiesuite.component';
import { ResultatComponent } from './components/resultat/resultat.component';
import { AllresultsComponent } from './components/allresults/allresults.component';
import { DetailQuestionsComponent } from './components/detail-questions/detail-questions.component';
import { RestmotdepasseComponent } from './components/restmotdepasse/restmotdepasse.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    IdentiyComponent,
    FooterComponent,
    FichierAudioComponent,
    SeDeplacerEnVilleComponent,
    MondeDuTravailComponent,
    OffreDemploiComponent,
    ActiviteidentitieComponent,
    ActiviteidentitiesuiteComponent,
    ResultatComponent,
    AllresultsComponent,
    DetailQuestionsComponent,
    RestmotdepasseComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDV-NQz94dEmsE3GrKjExCiolH33D4Lukw",

      authDomain: "cri-paca-936b6.firebaseapp.com",

      projectId: "cri-paca-936b6",

      storageBucket: "cri-paca-936b6.appspot.com",

      messagingSenderId: "381698997394",

      appId: "1:381698997394:web:223c7bf095d4696c43ba4b"

    })

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
