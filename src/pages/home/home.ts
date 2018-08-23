import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DetailPage } from "../detail/detail";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  entryComponents: [DetailPage]
})
export class HomePage {
	items;
	// info: {description: string}[] = [];

  constructor(public navCtrl: NavController, public http: HttpClient) {
  	
  	let url='https://jsonplaceholder.typicode.com/comments';
	let data: Observable<any> = this.http.get(url);
	data.subscribe(result => {
	this.items = result;

	});
  // this.getData();
 
}



showPopup(){
	this.navCtrl.push(DetailPage);
}

// getData(){
	
	// let url='https://jsonplaceholder.typicode.com/comments';
	// let data: Observable<any> = this.http.get(url);
	// data.subscribe(result => {
	// this.items = result;

	// });
// }

 

}
