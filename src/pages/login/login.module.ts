import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
