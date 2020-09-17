import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from 'src/app/service/login-auth.service';
import firebase from '@firebase/app';
import '@firebase/auth';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.scss']
})
export class PhoneLoginComponent implements OnInit {

  phone;
  code;

  constructor(private loginAuthService: LoginAuthService) { }

  ngOnInit(): void {
    firebase.initializeApp(environment.firebaseConfig);
    this.loginAuthService.recaptcha();
  }

  sendLoginCode() {
    this.loginAuthService.sendCode(this.phone);
  }

  verifyLoginCode() {
    this.loginAuthService.verifyCode(this.code);
  }

}
