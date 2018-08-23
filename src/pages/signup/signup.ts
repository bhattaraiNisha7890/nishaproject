import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SigninPage} from '../../pages/signin/signin';
import{FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
// import { HttpClient} from '@angular/common/http';
import {AlertController} from 'ionic-angular';
import { Http, Headers, RequestOptions} from '@angular/http';
import { SignUpService } from './signup.service';
import {GetPage} from '../../pages/get/get';
import {UpdatePage} from '../../pages/update/update';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [ SignUpService ]
})
export class SignupPage {

  formgroup:FormGroup;
  userInput:AbstractControl;
firstnameInput:AbstractControl;
lastnameInput:AbstractControl;
emailInput:AbstractControl;
phoneInput:AbstractControl;
passwordInput:AbstractControl;
confirmpasswordInput:AbstractControl;
streetInput:AbstractControl;
zoneInput:AbstractControl;
cityInput:AbstractControl;
countryInput:AbstractControl;


  constructor(private signUpService: SignUpService, public navCtrl: NavController, public navParams: NavParams,public formbuilder: FormBuilder, private http: Http, private alertCtrl: AlertController) {
  
  this.formgroup = formbuilder.group({
    userInput:['',Validators.compose([Validators.required])],
   firstnameInput:['',Validators.compose([Validators.required])],
  lastnameInput:['',Validators.compose([Validators.required])],
  emailInput:['',Validators.compose([Validators.required])],
  phoneInput:['',Validators.compose([Validators.required])],
  passwordInput:['',Validators.compose([Validators.required])],
  confirmpasswordInput:['',Validators.compose([Validators.required])],
  streetInput:['',Validators.compose([Validators.required])],
  zoneInput:['',Validators.compose([Validators.required])],
  cityInput:['',Validators.compose([Validators.required])],
  countryInput:['',Validators.compose([Validators.required])],
  
  });

this.userInput = this.formgroup.controls['userInput'];
  this.firstnameInput = this.formgroup.controls['firstnameInput'];
  this.lastnameInput = this.formgroup.controls['lastnameInput'];
  this.emailInput = this.formgroup.controls['emailInput'];
   this.phoneInput = this.formgroup.controls['phoneInput'];
  this.passwordInput = this.formgroup.controls['passwordInput'];
   this.confirmpasswordInput = this.formgroup.controls['confirmpasswordInput'];
   this.streetInput = this.formgroup.controls['streetInput'];
   this.zoneInput = this.formgroup.controls['zoneInput'];
   this.cityInput = this.formgroup.controls['cityInput'];
   this.countryInput = this.formgroup.controls['countryInput'];
  
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  clickforSignin(){

  	this.navCtrl.push(SigninPage);
  }

  signupButton(fg: FormGroup){
    var newUser = {
      typeOfUser: fg.value.userInput,
      name: fg.value.firstnameInput,
      username: fg.value.lastnameInput,
      email: fg.value.emailInput,
      phone: fg.value.phoneInput,
      password: fg.value.passwordInput,
      streetAddress: fg.value.streetInput,
      zone: fg.value.zoneInput,
      city: fg.value.cityInput,
      country: fg.value.countryInput

    }

    console.log(newUser)
    this.signUpService.signUp(newUser).subscribe((data) => {
      console.log(data)
    })




  }

  getData(){

    this.navCtrl.push(GetPage);
  }

  // updateData(){
  //   this.navCtrl.push(UpdatePage);
  // }


}
