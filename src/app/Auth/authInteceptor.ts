import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler,HttpEvent,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Authentication } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

constructor(private auth : Authentication){}

intercept( req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>>{

let token;
console.log("emmitted value observed here "+this.auth.User1);
 this.auth.User1.subscribe(data => {
token = data._token;
});
const nextReq = req.clone( { setHeaders : {
  Authorization: `${token}`} });
return next.handle(nextReq);
}

}