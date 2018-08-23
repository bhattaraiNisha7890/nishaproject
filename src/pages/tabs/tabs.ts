import { Component } from '@angular/core';

import { SellPage } from '../sell/sell';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {RentPage} from '../rent/rent';
import {SigninPage} from '../signin/signin';
import {InfoPage} from '../info/info';
import { ToastController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = InfoPage;
  tab3Root = ToastController;

  // tab3Root = ContactPage;
  // tab4Root = RentPage;

  constructor(private toastCtrl: ToastController) {

  }

  presentToast() {
  let toast = this.toastCtrl.create({
    message: 'User was added successfully',
    duration: 3000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}


}
