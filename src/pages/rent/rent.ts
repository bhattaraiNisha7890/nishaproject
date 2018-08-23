import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {HomePage} from '../home/home';

/**
 * Generated class for the RentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rent',
  templateUrl: 'rent.html',
})
export class RentPage {

formgroup:FormGroup;
name:AbstractControl;
email:AbstractControl;
description:AbstractControl;
option:AbstractControl;
price:AbstractControl;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formbuilder: FormBuilder) {

  	this.formgroup = formbuilder.group({
  	name:['',Validators.compose([Validators.required])],
  	email:['',Validators.compose([Validators.required])],
  	description:['',Validators.compose([Validators.required])],
    option:['',Validators.compose([Validators.required])],
  	price:['',Validators.compose([Validators.required])]

  	});

  	this.name = this.formgroup.controls['name'];
  	this.email = this.formgroup.controls['email'];
  	this.description = this.formgroup.controls['description'];
    this.option = this.formgroup.controls['option'];
  	this.price = this.formgroup.controls['price'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RentPage');
  }

  

}
