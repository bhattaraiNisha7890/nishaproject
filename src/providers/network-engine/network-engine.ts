import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the NetworkEngineProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NetworkEngineProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NetworkEngineProvider Provider');
  }

callPost(nameInput, descriptionInput){

console.log("Name = " + nameInput +" " +  "Description =" + descriptionInput);

let param = { namePerson: nameInput, descriptionDetail: descriptionInput};
let url = "http://httpbin.org/post";
let request = this.http.post(url,param);

return request.toPromise();
}

// signinPost(email, password){

// console.log("Email = " + email +" " +  "Password =" + password);

// let param = { personEmail: email, personPassword: password};
// let url = "http://nepalidolconcert.com/demo/intern/api/userlogin";
// let request = this.http.post(url,param);

// return request.toPromise();
// }



}
