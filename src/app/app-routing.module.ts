import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailLoginComponent } from './component/email-login/email-login.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { PhoneLoginComponent } from './component/phone-login/phone-login.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'email-login', component: EmailLoginComponent},
  {path: 'phone-login', component: PhoneLoginComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
