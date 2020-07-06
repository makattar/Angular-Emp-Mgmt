import { Component } from '@angular/core';
import {EnrollmentService} from './enrollment.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Emp-Mgmt';
  constructor(public  _authService:EnrollmentService){}
}
