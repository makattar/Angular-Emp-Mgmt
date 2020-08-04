import { Component, OnInit } from '@angular/core';
import {EmplistService} from '../emplist.service';
import { HttpErrorResponse } from '@angular/common/http';
import {Router} from '@angular/router';
import { OrderPipe } from 'ngx-order-pipe';
import {Employee} from '../shared/employee.model';
import {ListToDispalyService} from '../list-to-dispaly.service';
import {ListToEditService} from '../list-to-edit.service';
import {DeleteEmpService} from '../deleteemp.service';
import {LocationStrategy} from '@angular/common';
import {DepartmentService} from '../department.service';
import {JobtypeService} from '../jobtype.service';
import {AuthorizationService} from '../authorization.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  order:string='name';
  totalRecords:string;
  page:number=1;
  empList = [];
  reverse: boolean = false;
  sortedCollection: any[];
  searchTerm:string;
  selectedEmployee:Employee;
  selectedEmployeeId:number;
  userRole;
  constructor(private _empListService:EmplistService,
    private _router:Router,
    private orderPipe: OrderPipe,
    private _listToDisplayService:ListToDispalyService,
    private _listToEditService:ListToEditService,
    private _deleteEmpService:DeleteEmpService,
    private location:LocationStrategy,
    private _deptService:DepartmentService,
    private _jobtypeService:JobtypeService,
    public _authorizationService:AuthorizationService
    ) {
    this.sortedCollection = orderPipe.transform(this.empList, 'name');
    history.pushState(null,null,window.location.href);
    this.location.onPopState(()=>{
      history.pushState(null,null,window.location.href);
    })
   }

  ngOnInit(): void {
    //Get employee list from server
    this._empListService.getEmpList().subscribe(
      res=>{this.empList=res
      console.log(res)
      //console.log(res.length)
      this.totalRecords=res.length
      //console.log(this.totalRecords)
    },
      err=>{
        if(err instanceof HttpErrorResponse){
          if(err.status===401){
            this._router.navigate(['/sign-in'])
          }
        }
      }
    )
    //Set department array in service 
    this._deptService.setDeptList();
    //Set jobtype array in service
    this._jobtypeService.setJobtypeList();
    //Dummy testing of token 
     // this._authorizationService.decodetoken();
     //Get Role Of user
     this.userRole=this._authorizationService.getRole()
    
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  onView(employee:Employee):void{
    this.selectedEmployee=employee;
    this._listToDisplayService.setDetail(this.selectedEmployee);
    this._router.navigate(['/emp-details']);
  }
  onEdit(employee:Employee):void{
    this.selectedEmployee=employee;
    this._listToEditService.setDetail(this.selectedEmployee);
    this._router.navigate(['/edit-employee']);
  }
  onDelete(employee:Employee){
    console.log("Delete button clicked , calling http request for delete from new service");
    this.selectedEmployee=employee;
    this.selectedEmployeeId=this.selectedEmployee.id
    this._deleteEmpService.SetEmployeeToDelete(this.selectedEmployee);
    this._deleteEmpService.deleteEmpById().subscribe(
      res=>{
        console.log(res)
        if(res["status"]==="Success"){
          console.log("You can navigate to Employee list component through success component");
          //this._router.navigate(['success']);
          for (let i=0;i<this.empList.length;++i){
            if(this.empList[i].id==this.selectedEmployeeId){
              this.empList.splice(i,1);
            }
          }
        }
        else{
          console.log("Failed,,,,,Retry again")
        }
      },
      err=>{console.log(err)}
    );
  }

}
