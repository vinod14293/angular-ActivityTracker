import { Injectable } from '@angular/core';
import { SignUp } from '../Models/signUp';
import { User } from '../Models/User';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthResponseData } from '../Models/AuthResponseData';
import { tap,catchError  } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { throwError,Observable } from 'rxjs';

@Injectable({providedIn : 'root'})
export class Authentication{
//User = new Subject<User>();
User1 = new Subject<string>();


constructor(private http : HttpClient){
}

authenticate(login : SignUp){
console.log('Entered inside authentication method');
  return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdILz7MvoRpo_LfNQVq1SvWbjMYBGEo38',{
  email : login.email,
  password : login.password,
  returnSecureToken : true
}).pipe(catchError(this.handleError),tap(data=>{
//console.log("data to be disaplyed"+ data.email+ data.localId+ data.idToken+ data.expiresIn);
this.User1.next("vinod");
}));

}

private handleError(errorRes : HttpErrorResponse){
  console.log(errorRes);
return throwError(errorRes);
}

}