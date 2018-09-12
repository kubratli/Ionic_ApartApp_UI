import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {ActionSheet, ActionSheetOptions} from "@ionic-native/action-sheet";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AnasayfaPage } from '../pages/anasayfa/anasayfa';
import { MenuPage } from '../pages/menu/menu';
import {AnimationService, AnimatesDirective} from 'css-animator';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { LocationapartPage } from '../pages/locationapart/locationapart';
import { SocialSharing } from '../../node_modules/@ionic-native/social-sharing';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,  
    LocationapartPage,
    AnimatesDirective
  ],
  imports: [
    BrowserModule,
    IonicModule
    .forRoot(MyApp),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage, 
    LocationapartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AnimationService,
    ActionSheet,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
