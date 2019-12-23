import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Authentication } from './auth.service';
import { User } from '../Models/User';
import { take } from 'rxjs/operators'; 

@Injectable({providedIn:"root"})
export class AuthGuard implements CanActivate{

constructor(private router:Router, private auth : Authentication){
}
user : User;

canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot){
this.auth.User1.pipe(take(1)).subscribe(data =>
{
console.log("email extracted from subscribed data "+data.email);
this.user=data;
console.log("this.user is "+JSON.stringify(this.user));
}
)
if (this.user != null || this.user != ""){
  this.router.navigate(['/dashBoard']);
  return true;
}
else {
  this.router.navigate(['/login']);
  return false;
}


}

}