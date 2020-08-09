import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {User} from "src/app/user";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {Router} from '@angular/router';
import * as jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  
  //_enrollurl = 'http://localhost:3000/api/enroll';
  //_enrollurl = 'http://localhost:3000/users/registerUser';
  _enrollurl = 'https://mydbpg.herokuapp.com/users/registerUser';
  //_loginUrl="http://localhost:3000/api/loginUser";
  //_loginUrl="http://localhost:3000/users/loginUser";
  _loginUrl="https://mydbpg.herokuapp.com/users/loginUser";
  constructor(private _http: HttpClient,private _router :Router) { }

  enroll (user: User) {
    return this._http.post<any>(this._enrollurl, user)
      .pipe(catchError(this.errorHandler))
  }
  loginUser(user){
    return this._http.post<any>(this._loginUrl,user)
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/sign-in'])
  }
  isTokenExpired(token?: string): boolean {
    if(!token) token = this.getToken();
    if(!token) return true;
    console.log("Token expires on : ",jwt_decode(token).exp)
    if (jwt_decode(token).exp < Date.now() / 1000) {
      localStorage.removeItem('token')
      return true
    }
    return false

  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
}
