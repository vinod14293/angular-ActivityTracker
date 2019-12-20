import { Injectable } from '@angular/core';
import { SignUp } from '../Models/signUp';
import { HttpClient } from '@angular/common/http';
import { AuthResponseData } from '../Models/AuthResponseData';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

@Injectable({providedIn : 'root'})
export class Authentication{
user = new Subject<SignUp>();

constructor(private http : HttpClient){
}

authenticate(login : SignUp){
console.log('Entered inside authentication method');
  return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdILz7MvoRpo_LfNQVq1SvWbjMYBGEo38',{
  email : login.email,
  password : login.password,
  returnSecureToken : true
}).pipe(tap(data=>{
console.log(data);
const expirationdate = new Date(new Date().getTime + +data.expiresIn * 1000);
const user = new SignUp(data.email, data.localId, data.idToken, data.expirationdate);
this.user.next(user);
}));
}

}