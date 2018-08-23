import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UpdateService {
  constructor(private http: HttpClient){

  }

  update(updateUser){
    console.log(updateUser)
    return this.http.put("https://apips.printsewa.com.np/user/id/7", updateUser);
  }
 
}