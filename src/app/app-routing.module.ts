import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {EmployeeListComponent}from './employee-list/employee-list.component';
import {AuthGuard} from './auth.guard';
import {SigninGuardGuard} from './signin-guard.guard';
import {DisplayEmployeeDetailsComponent} from './display-employee-details/display-employee-details.component';
import { EditEmployeeDetailsComponent } from './edit-employee-details/edit-employee-details.component';
import {AddNewEmployeeComponent} from './add-new-employee/add-new-employee.component';
import {SuccessComponent} from './success/success.component';
import {FailedComponent} from './failed/failed.component';
const routes: Routes = [
  {path:'sign-in',
  component:SignInComponent,
  canActivate:[SigninGuardGuard]
},
  {path:'home',component:HomeComponent},
  {path:'sign-up',component:SignUpComponent},
  {
    path:'employee-list',
    component:EmployeeListComponent,
    canActivate:[AuthGuard]
  },
  {path:'success',component:SuccessComponent},
  {path:'failed',component:FailedComponent},
  {path:'',redirectTo:'/sign-in',pathMatch:'full'},
  {path:'emp-details',component:DisplayEmployeeDetailsComponent,canActivate:[AuthGuard]},
  {path:'edit-employee',component:EditEmployeeDetailsComponent,canActivate:[AuthGuard]},
  {path:'add-new-employee',component:AddNewEmployeeComponent,canActivate:[AuthGuard]},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
