import { Injectable } from '@angular/core';
import {Employee} from './shared/employee.model';
import {JobtypeService} from './jobtype.service';
import {DepartmentService} from './department.service';


@Injectable({
  providedIn: 'root'
})
export class ListToDispalyService {
  listToDisplayEmployee:Employee;//={id:null,name:'',email:'',DOB:null,salary:null};
  departments=this._departmentService.getDeptList();//["Not a dept","Human Resource","Software Developement","Management","Networking","Security"];
  jobtypes=this._jobtypeService.getJobTypeList();//["Not a jobtype","part-time","full-time"];
  tempjt:number;
  tempdt:number;
  constructor(private _jobtypeService:JobtypeService,private _departmentService:DepartmentService) { }
  setDetail(emp:Employee){
    this.tempjt=Number(emp.jobtype)
    this.tempdt=Number(emp.department)
    emp.department=this.departments[this.tempdt]
    emp.jobtype=this.jobtypes[this.tempjt]
    //console.log("Jobtype : ",emp.jobtype)
    this.listToDisplayEmployee=Object.assign({},emp);
  }
  getDetail():Employee{
    return this.listToDisplayEmployee;
  }
}
