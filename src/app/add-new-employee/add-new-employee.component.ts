import { Component, OnInit } from '@angular/core';
import {Employee} from '../shared/employee.model';
import {AddEmpService} from '../addemp.service';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {JobtypeService} from '../jobtype.service';
import {DepartmentService} from '../department.service';

@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css']
})
export class AddNewEmployeeComponent implements OnInit {
  filetest
  selectedFile=null;
  employeeToAdd:Employee;
  Status={};
  departments//=this._departmentService.getNormalDept();//["Human Resource","Software Developement","Management","Networking","Security"];
  jobTypesArray//=this._jobtypeService.getNormalJobtype();//["part-time","full-time"];
  departmentHasError=true;
  jobTypeHasError=true;
  constructor(private _addEmpService:AddEmpService,private _router:Router,private _jobtypeService:JobtypeService,private _departmentService:DepartmentService) { }

  ngOnInit(): void {
    this.employeeToAdd=new Employee(null,null,null,null,null,null,"default","default",null,null);
    this.departments=this._departmentService.getNormalDept();
    this.jobTypesArray=this._jobtypeService.getNormalJobtype();
    this.filetest=false
  }
  onFileSelected(event){
    //console.log(event)
    this.selectedFile=event.target.files[0];
    this.employeeToAdd.img=event.target.files[0];
    if(!this.validateFile(this.selectedFile.name)){
      console.log("File type not supported")
      this.filetest=true
    }
    else{
      this.filetest=false
    }
    //console.log("Selected file",this.selectedFile);
  }
  validateFile(name :String){
    var ext =name.substring(name.lastIndexOf('.')+1);
    if(ext.toLowerCase()=='png'|| ext.toLowerCase()=='jpg'||ext.toLowerCase()=='jpeg'){
      return true
    }else{
      return false
    }
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
