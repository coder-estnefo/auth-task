import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from 'src/app/service/login-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private loginAuthService: LoginAuthService,
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.loginAuthService.logout();
  }

}
