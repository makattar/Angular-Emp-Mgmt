import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeletedemplistService {

  private _deletedemployeeUrl="https://mydbpg.herokuapp.com/dashboard/exited-emp-list";
  constructor(private _http: HttpClient) { }

  getDeletedEmployees() {
    const headers = new  HttpHeaders().set('Content-Type','application/json')
    return this._http.get<any>(this._deletedemployeeUrl,{
        headers:headers
    })
  }
}
