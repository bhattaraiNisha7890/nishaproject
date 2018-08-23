import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';


import { SellPage } from '../pages/sell/sell';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {RentPage} from '../pages/rent/rent';
import {DetailPage} from '../pages/detail/detail';
import {SigninPage} from '../pages/signin/signin';
import {SignupPage} from '../pages/signup/signup';
import {GetPage} from '../pages/get/get';
import {UpdatePage} from '../pages/update/update';
import {InfoPage} from '../pages/info/info';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NetworkEngineProvider } from '../providers/network-engine/network-engine';
import {IonicStorageModule} from '@ionic/Storage';
import { ToastController } from 'ionic-angular';

@NgModule({
  declarations: [
    MyApp,
    SellPage,
    ContactPage,
    HomePage,
    TabsPage,
    RentPage,
    DetailPage,
    SigninPage,
    SignupPage,
    UpdatePage,
    GetPage,
    InfoPage,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SellPage,
    ContactPage,
    HomePage,
    TabsPage,
    RentPage,
    DetailPage,
    SigninPage,
    SignupPage,
    UpdatePage,
    GetPage,
    InfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NetworkEngineProvider
  ]
})
export class AppModule {}
