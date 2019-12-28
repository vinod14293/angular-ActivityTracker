import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler,HttpEvent,HttpResponse ,HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,tap,take, exhaustMap } from 'rxjs/operators';
import { Authentication } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

constructor(private auth : Authentication){
}

intercept( req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>>{

return this.auth.User1.pipe(
  take(1),
  exhaustMap(user => {
    if (user == null){
      return next.handle(req);
    }
    console.log("user logged here in interceptor "+JSON.stringify(user.token));
    const nextReq = req.clone( {headers: new HttpHeaders().set('Authorization',user.token)});
  return next.handle(nextReq); 
  }))

}

}