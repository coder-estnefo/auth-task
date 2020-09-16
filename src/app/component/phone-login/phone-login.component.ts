import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from 'src/app/service/login-auth.service';;

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
    
  }

  sendLoginCode() {
    this.loginAuthService.sendCode(this.phone);
  }

  verifyLoginCode() {
    this.loginAuthService.verifyCode(this.code);
  }

}
