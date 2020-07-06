import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {EnrollmentService} from './enrollment.service'
@Injectable({
  providedIn: 'root'
})
export class SigninGuardGuard implements CanActivate {
  constructor(private _authService:EnrollmentService,private _router:Router){}
  canActivate():boolean{
    if(this._authService.loggedIn()){
      this._router.navigate(['/employee-list'])
      return false
    }
    else{
      
      return true
    }
  }
  
}
