import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmplistService {
  page
  _empListUrl
  //private _empListUrl="http://localhost:3000/api/emp-list";
  //private _empListUrl="http://localhost:3000/employees/emp-list";
  //private _empListUrl="https://mydbpg.herokuapp.com/employees/emp-list";
  //private _empListUrl=`https://mydbpg.herokuapp.com/employees/emp-list?page=${this.page}`
  constructor(private http:HttpClient) { }
  getEmpList(page){
    this._empListUrl=`https://mydbpg.herokuapp.com/employees/emp-list?page=${page}`
    return this.http.get<any>(this._empListUrl);
  }
}
