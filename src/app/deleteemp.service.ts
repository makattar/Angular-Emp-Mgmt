import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from './shared/employee.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteEmpService {
  //private _empListUrl="http://localhost:3000/api/delempFromDatabase";
  private _empListUrl="http://localhost:3000/employees/delempFromDatabase";
  private employeeToSend:Employee
  constructor(private http:HttpClient) { }
  deleteEmpById(){
    const headers = new  HttpHeaders().set('Content-Type','application/json')
    return this.http.post<any>(this._empListUrl,JSON.stringify(this.employeeToSend),{
        headers:headers
    })
  }
  SetEmployeeToDelete(emp:Employee){
    console.log("In delete service ,Employee",emp)
    this.employeeToSend=Object.assign({},emp);
  }
}
