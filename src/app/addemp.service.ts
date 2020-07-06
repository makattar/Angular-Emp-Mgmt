import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from './shared/employee.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddEmpService {
  private _empListUrl="http://localhost:3000/api/addempToDatabase";
  private employeeToAdd:Employee
  constructor(private http:HttpClient) { }
  postnewemp(){
    const headers = new  HttpHeaders().set('Content-Type','application/json')
    return this.http.post(this._empListUrl,JSON.stringify(this.employeeToAdd),{
        headers:headers
    })
  }
  SetEmployeeToAdd(emp:Employee){
    this.employeeToAdd=Object.assign({},emp);
  }
}
