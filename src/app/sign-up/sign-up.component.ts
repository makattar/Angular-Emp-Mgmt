import { Component, OnInit } from '@angular/core';
import {User} from "src/app/user";
import {EnrollmentService} from 'src/app/enrollment.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 departments=["Human Resource","Software Development","Security","Management","Networking"];
 departmentHasError=true;
 submitted=false;
 errorMessage="";
 userModel=new User('','',1234567890,'default','','');
  constructor(private _enrollmentService:EnrollmentService,private _router : Router) { }

  ngOnInit(): void {
  }
  validateDepartment(value){
    if(value=="default"){
      this.departmentHasError=true;
    }
    else{
      this.departmentHasError=false;
    }
  }
  onSubmit(){
    //console.log("In on submit function");
    this.submitted=true;
    this._enrollmentService.enroll(this.userModel).subscribe(
        data=>{
          console.log('Success!',data)
          this._router.navigate(['/sign-in'])
      },
        //error=>console.log('Error!',error)
        error=>{this.errorMessage=error.statusText}
      )
  }

}
