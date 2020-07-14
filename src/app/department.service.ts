import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  departments:string[]=[]
  departmentsWithoutNull:string[]=[] 
  reenter=true
  private _departmentListUrl="http://localhost:3000/api/dept-list";
  constructor(private http:HttpClient) { }
  getDeptList(){
    return this.departments;
  }
  getNormalDept(){
    return this.departmentsWithoutNull;
  }
  setDeptList(){
      this.http.get<any>(this._departmentListUrl).subscribe(
          res=>{
            if(this.reenter){
              this.departments.push("NULL")
              console.log("In Department Service");
              for (var item of res){
                //console.log(item.deptname)
                this.departments.push(item.deptname)
                this.departmentsWithoutNull.push(item.deptname)
              }
              this.reenter=false
            }
            console.log(this.departments)
          }
      );
  }
}
