import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from './shared/employee.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddEmpService {
  //private _empListUrl="http://localhost:3000/api/addempToDatabase";
  private _empListUrl="http://localhost:3000/employees/addempToDatabase";
  //private _empListUrl="http://localhost:3000/upload";
  private employeeToAdd:Employee
  private img:File
  constructor(private http:HttpClient) { }
  postnewemp(){
    //this.img=imgToUpload
    //console.log(this.img)
    let formdata:FormData=new FormData();
    //formdata.append("name",this.employeeToAdd.name);
    formdata.append("img",this.employeeToAdd.img,this.employeeToAdd.img.name);
    formdata.append("id",null);
    formdata.append("name",this.employeeToAdd.name);
    formdata.append("email",this.employeeToAdd.email);
    formdata.append("dob",String(this.employeeToAdd.dob));
    formdata.append("salary",String(this.employeeToAdd.salary));
    formdata.append("contactno",String(this.employeeToAdd.contactno));
    formdata.append("department",this.employeeToAdd.department);
    formdata.append("jobtype",this.employeeToAdd.jobtype);
    formdata.append("doj",String(this.employeeToAdd.doj));

    //formdata.append("image",this.employeeToAdd.img,this.employeeToAdd.img.name);
    //console.log(this.employeeToAdd.img.name)
    //const headers = new  HttpHeaders().set('Content-Type','application/json')
    //return this.http.post(this._empListUrl,JSON.stringify(this.employeeToAdd),{
    //    headers:headers
    //})
    return this.http.post<any>(this._empListUrl,formdata);
  }
  SetEmployeeToAdd(emp:Employee){
    this.employeeToAdd=Object.assign({},emp);
  }
}
