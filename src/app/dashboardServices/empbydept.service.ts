import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmpbydeptService {
  private _deletedemployeeUrl="http://mydbpg.herokuapp.com/dashboard/dept-wise-emp";
  constructor(private _http: HttpClient) { }

  getDataToPlot() {
    const headers = new  HttpHeaders().set('Content-Type','application/json')
    return this._http.get<any>(this._deletedemployeeUrl,{
        headers:headers
    })
  }
}
