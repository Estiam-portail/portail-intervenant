import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;
  constructor(private afauth: AngularFireAuth, private fs: AngularFirestore) {
    this.user = afauth.user

  }
  userId = '';

  async getHexesInRows() {
    return this.user;
  }

  register(email, password) {
    return this.afauth.createUserWithEmailAndPassword(email, password);
    
  }
  addNewUser(uid, firstName, lastName, structure, departement, email) {
    // location.reload()
    return this.fs.doc('users/' + uid).set({
      uid,
      firstName,
      lastName,
      structure,
      departement,
      email,

    })
  }

  async userconnecter(userId: string) {
    const e = await this.fs.collection('user')
      .doc(userId).get()
    return e
  }

  login(email, password) {
    return this.afauth.signInWithEmailAndPassword(email, password)

  }

  logout() {
    return this.afauth.signOut()
  }

  resetPassword(email: string) {
    return this.afauth.sendPasswordResetEmail(email)
      .catch(function (error) {
        console.log("Got a error", error);
      })
  }


}
