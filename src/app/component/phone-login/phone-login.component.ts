import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from 'src/app/service/login-auth.service';
import firebase from '@firebase/app';
import '@firebase/auth';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.scss'],
})
export class PhoneLoginComponent implements OnInit {
  phone;
  code;
  verifyDisabled = true;
  countryCode = '+27';

  constructor(private loginAuthService: LoginAuthService) {}

  ngOnInit(): void {
    if (firebase.apps.length == 0) {
      firebase.initializeApp(environment.firebaseConfig);
    }
    this.loginAuthService.recaptcha();
  }

  sendLoginCode() {
    if (this.phone != undefined) {
      if (this.loginAuthService.recaptchaOk) {
        if (this.phone.toString().length != 9) {
          alert('Only Enter the Nine Numbers After Zero!');
        } else {
          this.phone = this.phone.toString();
          this.loginAuthService.sendCode(this.countryCode + this.phone);
          this.verifyDisabled = false;
        }
      } else {
        alert('Confirm You Are Not A Robot!');
      }
    } else {
      alert('Enter the Nine Numbers After Zero!');
    }
  }

  verifyLoginCode() {
    if (this.code != undefined && this.code.toString().length == 6) {
      this.code = this.code.toString();
      this.loginAuthService.verifyCode(this.code);
    } else {
      alert('Enter A Valid Code!');
    }
  }
}
