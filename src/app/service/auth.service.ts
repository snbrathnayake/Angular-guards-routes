import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  public cookieValue:string;
  
  constructor(private _http:HttpClient) { }

  /**
   * SET COOKIE VALUE 
   */
  public isLoggedIn(): boolean{
    return true;
  }
}
