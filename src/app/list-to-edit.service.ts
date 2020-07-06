import { Injectable } from '@angular/core';
import {Employee} from './shared/employee.model';

@Injectable({
  providedIn: 'root'
})
export class ListToEditService {

  listToEditEmployee:Employee;//={id:null,name:'',email:'',DOB:null,salary:null};
  constructor() { }
  setDetail(emp:Employee){
    this.listToEditEmployee=Object.assign({},emp);
  }
  getDetail():Employee{
    return this.listToEditEmployee;
  }
}
