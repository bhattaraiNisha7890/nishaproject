import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { NetworkEngineProvider } from '../../providers/network-engine/network-engine';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

formgroup:FormGroup;
name:AbstractControl;
// contact:AbstractControl;
description:AbstractControl;
// price:AbstractControl;

   

  constructor(public navCtrl: NavController, public formbuilder: FormBuilder, public network: NetworkEngineProvider) {

  this.formgroup = formbuilder.group({
  name:['',Validators.compose([Validators.required])],
  // contact:['',Validators.compose([Validators.required])],
  description:['',Validators.compose([Validators.required])]
  // price:['',Validators.compose([Validators.required])]

  });

  this.name = this.formgroup.controls['name'];
  // this.contact = this.formgroup.controls['contact'];
  this.description = this.formgroup.controls['description'];
  // this.price = this.formgroup.controls['price'];

 
  }

 callPostService(nameInput, descriptionInput){

let p = this.network.callPost(nameInput,descriptionInput);
p.then(data => {

console.log("Received" + JSON.stringify(data) );

})
 }
  

}
