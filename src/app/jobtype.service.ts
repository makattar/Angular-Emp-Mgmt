import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobtypeService {
  //private _jobtypeListUrl="http://localhost:3000/api/jobtype-list";
  private _jobtypeListUrl="https://mydbpg.herokuapp.com/api/jobtype-list";
  jobtypes:string[]=[]
  jobtypesWithoutNull:string[]=[]
  reenter=true
  constructor(private http:HttpClient) { }
  getJobTypeList(){
    return this.jobtypes;
  }
  getNormalJobtype(){
    return this.jobtypesWithoutNull;
  }
  setJobtypeList(){
    this.http.get<any>(this._jobtypeListUrl).subscribe(
        res=>{if(this.reenter){
          this.jobtypes.push("NULL")
            console.log("In Jobtype Service");
            for (var item of res){
              //console.log(item.deptname)
              this.jobtypes.push(item.jobtype)
              this.jobtypesWithoutNull.push(item.jobtype)
            }
            
            this.reenter=false
        }
        console.log(this.jobtypes)
            
        }
    );
}
}
