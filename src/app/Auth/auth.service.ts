import { Injectable } from '@angular/core';
import { Login } from '../Models/login';
import {  }


@Injectable({providedIn : 'root'})
export class Authentication{

constructor(){
}

authenticate(login : Login){
console.log('Entered inside authentication method');
  if(login.email == "vinod@gmail.com" && login.password == "vinod123"){
    console.log('user authenticated');
  }


}

}