import { Component, OnInit } from '@angular/core';
import {EnrollmentService} from '../enrollment.service';
import {Router} from '@angular/router';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
 loginUserModel={email:'',password:''};
 public error = "";
 public loading: boolean = false;
 encPassword:string="makattar"
 conversionEncryptedPassword:string;
 conversionDecryptedPassword:string;
  constructor(private _loginService:EnrollmentService,private _router:Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    this.loading=true;
   //console.log(this.loginUserModel)
  this.conversionEncryptedPassword=CryptoJS.AES.encrypt(this.loginUserModel.password.trim(),this.encPassword.trim()).toString();
  console.log("Encrypted password is :",this.conversionEncryptedPassword); 
  this.conversionDecryptedPassword=CryptoJS.AES.decrypt(this.conversionEncryptedPassword.trim(),this.encPassword.trim()).toString(CryptoJS.enc.Utf8);
  console.log("Decrypted password is :",this.conversionDecryptedPassword);
  this.loginUserModel.password=this.conversionEncryptedPassword;
  this._loginService.loginUser(this.loginUserModel).subscribe(
     res=>{
       console.log(res)
       if(res.status==="Failed"){
         this.error=res.Error
       }
       else{
       localStorage.setItem('token',res.token)
       this._router.navigate(['./employee-list'])
      }
     },
     err=>{
       console.log(err)
       this.error="Invalid Username and Password";
      }
   )
 }
}
