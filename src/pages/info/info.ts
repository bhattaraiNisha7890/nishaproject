import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../../pages/home/home';
import {SigninPage} from '../../pages/signin/signin';
import {ContactPage} from '../../pages/contact/contact';
import {SellPage} from '../../pages/sell/sell';
import {RentPage} from '../../pages/rent/rent';
import {Storage} from '@ionic/Storage';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  buyProperty(){

  	this.storage.get('value').then((val) =>{

  		console.log(val);

  		if(val! = null){

  			this.navCtrl.push(SigninPage);
  		}

  		else{

  			this.navCtrl.push(ContactPage);


  		}


  	});



  }

  sellProperty(){


  	this.storage.get('value').then((val) =>{

  		console.log(val);

  		if(val! = null){

  			this.navCtrl.push(SigninPage);
  		}

  		else{

  			this.navCtrl.push(SellPage);


  		}


  	});

  }

  rentProperty(){

  	this.storage.get('value').then((val) =>{

  		console.log(val);

  		if(val! = null){

  			this.navCtrl.push(SigninPage);
  		}

  		else{

  			this.navCtrl.push(RentPage);


  		}


  	});



  }

}
