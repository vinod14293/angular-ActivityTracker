import { Injectable } from '@angular/core';
import { Login } from '../Models/login';
import { HttpClient } from '@angular/common/http';
import { AuthResponseData } from '../Model/AuthResponseData';


@Injectable({providedIn : 'root'})
export class Authentication{

constructor(private http : HttpClient){
}

authenticate(login : Login){
console.log('Entered inside authentication method');
  // if(login.email == "vinod@gmail.com" && login.password == "vinod123"){
 //   console.log('user authenticated');
//  }
  return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdILz7MvoRpo_LfNQVq1SvWbjMYBGEo38',{
  email : login.email,
  password : login.password,
  returnSecureToken : true
});


}

}