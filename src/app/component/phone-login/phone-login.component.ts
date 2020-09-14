import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginAuthService } from 'src/app/service/login-auth.service';

@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.scss']
})
export class PhoneLoginComponent implements OnInit {

  user: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginAuthService: LoginAuthService
  ) { }

  ngOnInit(): void {
    this.user = this.formBuilder.group({
      phone: ['', Validators.required]
    });
  }

}
