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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule ,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB4nkODq8ux8uNkpkDdUpmUDbOb5lxIoW0",
      authDomain: "cripaka-54fa8.firebaseapp.com",
      databaseURL: "https://cripaka-54fa8.firebaseio.com",
      projectId: "cripaka-54fa8",
      storageBucket: "cripaka-54fa8.appspot.com",
      messagingSenderId: "852978842592",
      appId: "1:852978842592:web:d2c750d3647f325938c985"
    })

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
