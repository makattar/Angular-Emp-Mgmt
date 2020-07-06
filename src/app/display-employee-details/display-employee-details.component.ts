import { Component, OnInit } from '@angular/core';
import {ListToDispalyService} from '../list-to-dispaly.service';
import {Employee} from '../shared/employee.model';

@Component({
  selector: 'app-display-employee-details',
  templateUrl: './display-employee-details.component.html',
  styleUrls: ['./display-employee-details.component.css']
})
export class DisplayEmployeeDetailsComponent implements OnInit {
  employeeToDisplay:Employee;
  constructor(private _listToDisplayService:ListToDispalyService) { }

  ngOnInit(): void {
    this.employeeToDisplay=this._listToDisplayService.getDetail();
    console.log(this.employeeToDisplay);
  }

}
