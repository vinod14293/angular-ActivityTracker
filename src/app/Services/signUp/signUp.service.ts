import { Injectable } from '@angular/core';
import { SignUpModel } from '../Models/signUp';

@Injectable({providedIn : 'root'})
export class SignUp{
  constructor(){
  }

  signUp(signUpMo : SignUpModel){
    console.log('sign up for the user has been completed'+signUpMo);
  }

}