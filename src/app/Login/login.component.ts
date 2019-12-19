import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Authentication  } from '../Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent  {

  constructor(private fb : FormBuilder, private login : Authentication){
  }


//form builder for form construction
  loginForm = this.fb.group({
    email : [''],
    password : ['']
  });

  onSubmit(){
    console.log(this.loginForm.value);
    this.login.authenticate(this.loginForm.value);
  }
}