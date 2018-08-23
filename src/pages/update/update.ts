import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { Http} from '@angular/http';
import { UpdateService } from './update.service';
/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
  providers: [ UpdateService ]
})
export class UpdatePage {

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

  constructor(private updateService: UpdateService, public navCtrl: NavController, public navParams: NavParams,public formbuilder: FormBuilder, private http: Http) {

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
    console.log('ionViewDidLoad UpdatePage');
  }

   save(fg: FormGroup){
    var updateUser = {
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

    console.log(updateUser)
    this.updateService.update(updateUser).subscribe((data) => {
      console.log(data)
    })




  }

}
