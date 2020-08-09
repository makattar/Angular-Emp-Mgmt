import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {EnrollmentService} from './enrollment.service'


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService:EnrollmentService,private _router:Router){}
  canActivate():boolean{
    if(this._authService.loggedIn()){
      
      if(this._authService.isTokenExpired()){
        this._router.navigate(['./sign-in'])
        return false
      }
      return true
    }
    else{
      this._router.navigate(['./sign-in'])
      return false
    }
  }
}
