import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/app'
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  email;
  user: Observable<firebase.User>;
  isUser: boolean = false;
  constructor(public afauth: AngularFireAuth, private fs: AngularFirestore) {
    this.user = afauth.user
    console.log("this user in service ", this.user);

    console.log("this user in service ", this.user.subscribe(u=>{
      console.log("le token est :  ", u.getIdToken);
      
    }));

  }
  // userId = '';

  async getHexesInRows() {
    let user = await this.user.subscribe(res => {
      console.log("hello :", res.uid);
      // console.log("hello res all :", res.linkWithCredential);
      this.email = res.email
    })
    return user
  }

  register(email, password) {
    return this.afauth.createUserWithEmailAndPassword(email, password);
  }
  addNewUser(uid, nom, prenom, email) {
    return this.fs.doc('users/' + uid).set({
      uid,
      nom,
      prenom,
      email,
      admin: false

    })
  }

  async userconnecter(userId: string) {
    const e = await this.fs.collection('user')
      .doc(userId).get()
    this.user
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

  // ************************  signIn with google **********************************
  signInWithGoogle() {
    return this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

}
