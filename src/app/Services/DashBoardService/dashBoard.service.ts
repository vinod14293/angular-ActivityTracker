import { Injectable } from '@angular/core';
///import { SignUpModel } from '../Models/signUp';
import { HttpClient } from '@angular/common/http'

@Injectable({providedIn : 'root'})
export class DashBaordSevice{
  constructor(private http : HttpClient){
  }

  loadDashBoard(){
     return this.http.get<AuthResponseData>(//'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdILz7MvoRpo_LfNQVq1SvWbjMYBGEo38'
    'http://localhost:8080/getEmployee');

  }

  /*signUp(signUpMo : SignUpModel){
    console.log('sign up for the user has been completed'+signUpMo);
    return this.http.post<AuthResponseData>(//'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdILz7MvoRpo_LfNQVq1SvWbjMYBGEo38'
    'http://localhost:8080/register'
    ,{
  username : signUpMo.email,
  password : signUpMo.password,
  returnSecureToken : true
});
  }*/

}