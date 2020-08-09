import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JoinedemployeeService {
  private _joinedemployeeUrl="https://mydbpg.herokuapp.com/dashboard/join-emp-stat";
  constructor(private _http: HttpClient) { }

  getDataToPlot() {
    const headers = new  HttpHeaders().set('Content-Type','application/json')
    return this._http.get<any>(this._joinedemployeeUrl,{
        headers:headers
    })
  }

}
