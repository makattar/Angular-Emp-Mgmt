import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmplistService {
  private _empListUrl="http://localhost:3000/api/emp-list";
  constructor(private http:HttpClient) { }
  getEmpList(){
    return this.http.get<any>(this._empListUrl);
  }
}
