import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import {EnrollmentService} from './enrollment.service';
@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private enrollmentService:EnrollmentService) { }
  decodetoken(){
    
    var token = String(this.enrollmentService.getToken());
    console.log("In Authorization decode token",token)
    var decoded = jwt_decode(token); 
    //console.log("Decoded token",decoded);
    var role=decoded['role'];
    var username=decoded['username']
    //console.log("Username is: ",username)
    //console.log("Role is :",role);
  }
  getRole(){
    var token = String(this.enrollmentService.getToken());
    var decoded = jwt_decode(token); 
    var role=decoded['role'];
    return String(role);
  }
  hardisAuthorized(){
    var token = String(this.enrollmentService.getToken());
    var decoded = jwt_decode(token); 
    var role=decoded['role'];
    var username=decoded['username']
    if(String(role)==="Human Resource"){
      return true
    }
    else{
      return false
    }
  }
  isAuthorized(allowedRoles: string[]): boolean {
    // check if the list of allowed roles is empty, if empty, authorize the user to access the page
    if (allowedRoles == null || allowedRoles.length === 0) {
      return true;
    }

    // get token from local storage or state management
    //const token = localStorage.getItem('token');
    const token = String(this.enrollmentService.getToken());

    // decode token to read the payload details
    //const decodeToken = this.jwtHelperService.decodeToken(token);
    const  decodeToken = jwt_decode(token);

    // check if it was decoded successfully, if not the token is not valid, deny access
    if (!decodeToken) {
      console.log('Invalid token');
      return false;
    }

    // check if the user roles is in the list of allowed roles, return true if allowed and false if not allowed
    return allowedRoles.includes(decodeToken['role']);
   
  }
}
