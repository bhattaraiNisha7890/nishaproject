import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/Storage';

@Injectable()
export class SignInService {

	static readonly LOGIN_URL = 'https://apips.printsewa.com.np/user/check/';


  constructor(private storage: Storage, private http: HttpClient){

  }

 signin(email,password){
 	return this.http.get("https://apips.printsewa.com.np/user/check/"+email+'/'+password);

 }


}