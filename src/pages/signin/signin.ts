import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SignupPage} from '../../pages/signup/signup';
import {HomePage} from '../../pages/home/home';
import {InfoPage} from '../../pages/info/info';
import{FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
// import { Http, Headers, RequestOptions } from '@angular/http';
import { SignInService } from './signin.service';
import {AlertController} from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { Http} from '@angular/http';
import {Storage} from '@ionic/Storage';


// import { NetworkEngineProvider } from '../../providers/network-engine/network-engine';
/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
  providers: [ SignInService ]
})
export class SigninPage {
userData;
//   formgroup:FormGroup;
// emailInput:AbstractControl;
// passwordInput:AbstractControl;
signinCredentials = { emailInput: '', passwordInput: ''};

  constructor(private storage: Storage, private signInService: SignInService, public navCtrl: NavController, public navParams: NavParams, public formbuilder: FormBuilder, public http: Http,public httpClient: HttpClient, private alertCtrl: AlertController) {
 
 // this.formgroup = formbuilder.group({
 //  emailInput:['',Validators.compose([Validators.required])],
 //  passwordInput:['',Validators.compose([Validators.required])]
  
 //  });

 //  this.emailInput = this.formgroup.controls['signinCredentials.emailInput'];
 //  this.passwordInput = this.formgroup.controls['signinCredentials.passwordInput'];
  

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  clickforSignup(){
  	this.navCtrl.push(SignupPage);
  }

  signinButton(email,password){

    console.log(email,password)
    this.signInService.signin(email,password).subscribe((data) => {
        console.log(data)
        this.userData = data;


        if(this.userData.length > 0){
          alert('Successfully signed in');
          this.navCtrl.push(InfoPage);

           this.storage.set('value', this.userData[0].email);

          //  this.storage.get('value').then((val) => {
          //   console.log('Your email is', val);
          // });
          
        }else{
          alert("Please enter valid credential");
        }


    }); 

    // this.signInService.signin(this.signinCredentials).subscribe(allowed => {
    //   if (allowed) {
    //     this.navCtrl.setRoot(HomePage);
    //   } else {
    //     alert("These credentials do not match our records.");
    //   }
    // },
    //   error => {
    //     alert(error);
    //   });

   
}

}
