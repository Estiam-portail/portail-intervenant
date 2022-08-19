import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user : Observable<firebase.User>;

  constructor(private afauth:AngularFireAuth, private fs:AngularFirestore) { 
    this.user = afauth.user
  }

  register(email,password){
    return this.afauth.createUserWithEmailAndPassword(email,password);
  }

  login(email, password){
    return this.afauth.signInWithEmailAndPassword(email, password)
  }

  logout(){
    return this.afauth.signOut()
  }


}
