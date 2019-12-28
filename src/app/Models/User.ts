export class User{
  constructor(
   public email : string, 
   public password : string, 
   private token : string,
   private _tokenExpirationDate : Date){
   }
   get token1(){
     if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
       return null;
     }
     return this.token;
   }
}