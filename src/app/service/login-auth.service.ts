import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor(
    private auth: AngularFireAuth,
    private router: Router
  ) { }

  createUser(email, password) {
    this.auth.createUserWithEmailAndPassword(email, password).then( () => {
      console.log("account created");
    }).catch((error) => {
      console.log(error.message);
    });
  }

  loginEmailPassword(email, password) {
    this.auth.signInWithEmailAndPassword(email, password).then( () => {
      console.log("email and password successful login");
      this.router.navigateByUrl("/home");
    }).catch( (error) => {
      console.log(error.message);
    });
  }

  googleSignIn() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(() => {
      console.log("google login successful");
      this.router.navigateByUrl("/home");
    }).catch((error) => {
      console.log(error.message);
    });
  }

  facebookSignIn() {
    this.auth.signInWithPopup(new auth.FacebookAuthProvider()).then(() => {
      console.log("facebook successful login");
      this.router.navigateByUrl("/home");
    }).catch((error) => {
      console.log(error.message);
    });
  }

  phoneSignIn() {
    this.auth.signInWithPopup(new auth.PhoneAuthProvider()).then(() => {
      console.log("phone successful login");
      this.router.navigateByUrl("/home");
    }).catch((error) => {
      console.log(error.message);
    });
  }

  logout() {
    this.auth.signOut();
    this.router.navigateByUrl("");
  }
}
