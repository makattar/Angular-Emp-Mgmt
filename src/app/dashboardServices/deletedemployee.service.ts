import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeletedemployeeService {
  private _deletedemployeeUrl="http://mydbpg.herokuapp.com/dashboard/delete-emp-stat";
  constructor(private _http: HttpClient) { }

  getDataToPlot() {
    const headers = new  HttpHeaders().set('Content-Type','application/json')
    return this._http.get<any>(this._deletedemployeeUrl,{
        headers:headers
    })
  }
}
