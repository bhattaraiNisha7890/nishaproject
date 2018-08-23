import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SignUpService {
  constructor(private http: HttpClient){

  }

  signUp(newUser){
    console.log(newUser)
    return this.http.post("https://apips.printsewa.com.np/users/add", newUser);
  }
 
}