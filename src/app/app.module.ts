import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { HomeComponent } from './component/home/home.component';
import { EmailLoginComponent } from './component/email-login/email-login.component';
import { PhoneLoginComponent } from './component/phone-login/phone-login.component';

const firebaseConfig = {
  apiKey: "AIzaSyDUtLIx6HuEXLY3008yUDZ6cUen59A6cO8",
  authDomain: "mock-01.firebaseapp.com",
  databaseURL: "https://mock-01.firebaseio.com",
  projectId: "mock-01",
  storageBucket: "mock-01.appspot.com",
  messagingSenderId: "328761203115",
  appId: "1:328761203115:web:e9a11c0a908c50cb57daee",
  measurementId: "G-YN9P6KQWS8"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmailLoginComponent,
    PhoneLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
