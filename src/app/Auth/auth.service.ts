import { Injectable } from '@angular/core';


@Injectable({providedIn : 'root'})
export class Authentication{

constructor(){
}

authenticate(email : string, password : string){
console.log('Entered inside authentication method');
  if(email == "vinod@gmail.com" && password == "vinod123"){
    console.log('user authenticated');
  }
}

}