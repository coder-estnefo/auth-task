import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginAuthService } from 'src/app/service/login-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginAuthService: LoginAuthService
  ) { }

  ngOnInit(): void {
    this.user = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signUp(form){
    this.loginAuthService.createUser(form.value.email, form.value.password);
  }

  facebookLogin() {
    this.loginAuthService.facebookSignIn();
  }

  googleLogin() {
    this.loginAuthService.googleSignIn();
  }
  
}
