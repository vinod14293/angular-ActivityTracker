import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SignUp } from '../Services/signUp/signUp.service';
import { SignUpModel } from '../Models/signUp';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logActivity',
  templateUrl: './logActivity.component.html',
  styleUrls: [ './logActivity.component.css' ]
})
export class LogActivity  {

  signUpModel : SignUpModel;
  error : any;

constructor( private fb : FormBuilder, private signUpService : SignUp, private router : Router){
}

signUpForm = this.fb.group({
  activityCategory : [''],
  enterDate : [''],
  description : [''],
  duration : [''],
});

logActivity(){
    console.log(this.signUpForm.value);
}

}