import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';


/**
 * Generated class for the GetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-get',
  templateUrl: 'get.html',
  
})
export class GetPage {
	items;

  constructor( public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  let url='https://apips.printsewa.com.np/user/id/7';
	let data: Observable<any> = this.http.get(url);
	data.subscribe(result => {
	this.items = result;

	});
  	


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetPage');
  }

  updateData(){

  	



  }



}
