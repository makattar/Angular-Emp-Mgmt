import { Component, OnInit } from '@angular/core';
import {ListToDispalyService} from '../list-to-dispaly.service';
import {Employee} from '../shared/employee.model';
import {HttpClient,HttpEventType,HttpHeaders} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-display-employee-details',
  templateUrl: './display-employee-details.component.html',
  styleUrls: ['./display-employee-details.component.css']
})
export class DisplayEmployeeDetailsComponent implements OnInit {
  _getImageurl
  retrievedImage:any;
  employeeToDisplay:Employee;
  constructor(private _listToDisplayService:ListToDispalyService,private httpClient:HttpClient,private _domSanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this._getImageurl="http://localhost:3000/employees/getEmpImg";
    this.employeeToDisplay=this._listToDisplayService.getDetail();
    console.log(this.employeeToDisplay);
    console.log(this.employeeToDisplay.id);
    const headers = new  HttpHeaders().set('Content-Type','application/json')
    this.httpClient.post(this._getImageurl,JSON.stringify(this.employeeToDisplay),{
      headers:headers
  })
      .subscribe(data=>{
        let TYPED_ARRAY=new Uint8Array(data['ImageData']['data']);
        const STRING_CHAR=TYPED_ARRAY.reduce((data,byte)=>{
          return data+String.fromCharCode(byte)
        },'')
        let base64String=btoa(STRING_CHAR);
        this.retrievedImage=this._domSanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,'+base64String)
      },
      err=>{console.log(err)})
  }

}
