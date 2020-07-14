import { Component } from '@angular/core';
import {EnrollmentService} from './enrollment.service';
import {AuthorizationService} from './authorization.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Emp-Mgmt';
  constructor(public  _authService:EnrollmentService,public _authorizationSevice:AuthorizationService){}
}
