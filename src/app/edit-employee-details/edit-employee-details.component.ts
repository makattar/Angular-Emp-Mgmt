import { Component, OnInit } from '@angular/core';
import {Employee} from '../shared/employee.model';
import {ListToEditService} from '../list-to-edit.service';
import { DatePipe } from '@angular/common';
import {UpdateEmpService} from '../updateemp.service';
import {Router} from '@angular/router';
import {LocationStrategy} from '@angular/common';

@Component({
  selector: 'app-edit-employee-details',
  templateUrl: './edit-employee-details.component.html',
  styleUrls: ['./edit-employee-details.component.css']
})
export class EditEmployeeDetailsComponent implements OnInit {
  employeeToEdit:Employee;
  //employeeBirthDate:Date;
  //Employee  select Component
  departments=["Human Resource","Software Developement","Management","Networking","Security"];
  jobTypesArray=["part-time","full-time"];
  departmentHasError=true;
  jobTypeHasError=true; 
  constructor(private _listToEditService:ListToEditService,private _updateEmpService:UpdateEmpService,private _router:Router,private location:LocationStrategy) { 
    history.pushState(null,null,window.location.href);
    this.location.onPopState(()=>{
      history.pushState(null,null,window.location.href);
    })
  }

  ngOnInit(): void {
    this.employeeToEdit=this._listToEditService.getDetail();
    //this.employeeBirthDate=this.employeeToEdit.DOB;//new DatePipe('en-US').transform(this.employeeToEdit.DOB,'dd/MM/yyyy');
    console.log(this.employeeToEdit);
  }
  confirmEdit(){
    console.log("Confirm button clicked , call httprequest from new service ")
    //console.log(this.employeeToEdit)
    //Set employee to edit
    this._updateEmpService.SetEmployeeToEdit(this.employeeToEdit);
    //request to update employee
    this._updateEmpService.postnewemp().subscribe(
      data=>{
        console.log(data);
        console.log(data["status"]);
        if(data["status"]==="Success"){
          console.log("You can navigate to Employee list component through success component");
          this._router.navigate(['success']);
        }
        else{
          console.log("Failed,,,,,Retry again")
        }
      }
    );
  }
  //Edit select component
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
