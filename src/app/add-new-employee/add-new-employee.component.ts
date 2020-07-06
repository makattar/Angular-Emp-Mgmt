import { Component, OnInit } from '@angular/core';
import {Employee} from '../shared/employee.model';
import {AddEmpService} from '../addemp.service';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css']
})
export class AddNewEmployeeComponent implements OnInit {
  employeeToAdd:Employee;
  Status={}
  departments=["Human Resource","Software Developement","Management","Networking","Security"];
  jobTypesArray=["part-time","full-time"];
  departmentHasError=true;
  jobTypeHasError=true;
  constructor(private _addEmpService:AddEmpService,private _router:Router) { }

  ngOnInit(): void {
    this.employeeToAdd=new Employee(null,null,null,null,null,null,"default","default",null);
  }
  confirmAdd(){
    this._addEmpService.SetEmployeeToAdd(this.employeeToAdd);
    this._addEmpService.postnewemp().subscribe(
      data=>{
        console.log(data);
        console.log(data["status"]);
        if(data["status"]==="Success"){
          console.log("You can navigate to Employee list component through success component");
          this._router.navigate(['success']);
        }
        else{
          console.log("Failed,,,,,Retry again");
          this._router.navigate(['failed']);
        }
      },
      err=>{
        console.log("Error from server : ",err);
        this._router.navigate(['failed']);
      }
    );
  }
  validateDepartment(value){
    if(value=="default"){
      this.departmentHasError=true;
    }
    else{
      this.departmentHasError=false;
    }
  }
  validateJobType(value){
    if(value=="default"){
      this.jobTypeHasError=true;
    }
    else{
      this.jobTypeHasError=false;
    }
  }
}
