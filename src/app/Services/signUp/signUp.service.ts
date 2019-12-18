import { Injectable } from '@angular/core';
import { SignUpModel } from '../Models/signUp';

@Injectable({providedIn : 'root'})
export class SignUp{

  constructor(){

  }

  signUp(signUpMo : SignUpModel){
    //service to be written here
    console.log('sign up for the user has been completed'+signUpMo);
  }

}