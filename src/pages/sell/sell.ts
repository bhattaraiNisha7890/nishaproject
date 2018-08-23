import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import{FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import {HomePage} from "../home/home";


@Component({
  selector: 'page-sell',
  templateUrl: 'sell.html'
})
export class SellPage {

selectedFile: File = null;

formgroup:FormGroup;
description:AbstractControl;
contact: AbstractControl;
price: AbstractControl;
file: AbstractControl;

  constructor(public navCtrl: NavController, public http: HttpClient, public formbuilder: FormBuilder) {

  this.formgroup = formbuilder.group({
description:['',Validators.compose([Validators.required])],
contact:['',Validators.compose([Validators.required])],
price:['',Validators.compose([Validators.required])],
file:['',Validators.compose([Validators.required])]

  });


this.description = this.formgroup.controls['description'];
this.contact = this.formgroup.controls['contact'];
this.price = this.formgroup.controls['price'];
this.file = this.formgroup.controls['file'];


 


  }

   onFileSelected(event){
 		this.selectedFile =<File> event.target.files[0];
  }

  onUpload(){

  const fd = new FormData();
  fd.append('image', this.selectedFile, this.selectedFile.name);

  this.http.post('',fd)
  .subscribe(res => {
  console.log(res);
  });



  }

  


 
}
