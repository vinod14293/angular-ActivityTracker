import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SignUp } from '../Services/signUp/signUp.service';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: [ './signUp.component.css' ]
})
export class SignUpComponent  {

constructor( private fb : FormBuilder, private signUpService : SignUp){
}

signUpForm = this.fb.group({
  name : [''],
  employId : [''],
  email : [''],
  password : [''],
  confirmPWD : ['']
});

signUp(){
  console.log(this.signUpForm.value);
  this.signUpService.signUp();
}

}