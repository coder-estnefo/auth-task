import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { WindowService } from './window.service';


@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  windowRef;

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private win: WindowService
  ) { }

  createUser(email, password) {
    this.auth.createUserWithEmailAndPassword(email, password).then( () => {
      console.log('account created');
    }).catch((error) => {
      console.log(error.message);
    });
  }

  loginEmailPassword(email, password) {
    this.auth.signInWithEmailAndPassword(email, password).then( () => {
      console.log('email and password successful login');
      this.router.navigateByUrl('/home');
    }).catch( (error) => {
      console.log(error.message);
    });
  }

  googleSignIn() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(() => {
      console.log('google login successful');
      this.router.navigateByUrl('/home');
    }).catch((error) => {
      console.log(error.message);
    });
  }

  facebookSignIn() {
    this.auth.signInWithPopup(new auth.FacebookAuthProvider()).then(() => {
      console.log('facebook successful login');
      this.router.navigateByUrl('/home');
    }).catch((error) => {
      console.log(error.message);
    });
  }

  phoneSignIn() {
    this.auth.signInWithPopup(new auth.PhoneAuthProvider()).then(() => {
      console.log('phone successful login');
      this.router.navigateByUrl('/home');
    }).catch((error) => {
      console.log(error.message);
    });
  }

  recaptcha() {
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render();
  }

  sendCode(phone) {
    const appVerifier = this.windowRef.recaptchaVerifier;
    this.auth.signInWithPhoneNumber(phone, appVerifier).then((result) => {
      this.windowRef.confirmationResult = result;
      console.log('sending code');
    }).catch((error) => {
      console.log(error.message);
    });
  }

  verifyCode(code) {
    this.windowRef.confirmationResult.confirm(code).then(() => {
      console.log('code verified');
    }).catch((error) =>{
      console.log(error.message);
    });
  }

  logout() {
    this.auth.signOut();
    this.router.navigateByUrl('');
  }
}
