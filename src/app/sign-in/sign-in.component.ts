import { Component, OnInit } from '@angular/core';
import {EnrollmentService} from '../enrollment.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
 loginUserModel={email:'',password:''};
 public error = "";
  constructor(private _loginService:EnrollmentService,private _router:Router) { }

  ngOnInit(): void {
  }
  loginUser(){
   //console.log(this.loginUserModel)
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
