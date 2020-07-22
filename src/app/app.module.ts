import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component'
import {EnrollmentService} from  './enrollment.service';
import { EmployeeListComponent } from './employee-list/employee-list.component'
import {EmplistService} from './emplist.service';
import {ListToDispalyService} from './list-to-dispaly.service';
import {ListToEditService} from './list-to-edit.service';
import {AuthGuard} from './auth.guard';
import {TokenInterceptorService} from './token-interceptor.service';
import {SigninGuardGuard} from './signin-guard.guard';
import {OrderModule} from 'ngx-order-pipe';
import { EmployeeFilterPipe } from './employee-filter.pipe';
import { DisplayEmployeeDetailsComponent } from './display-employee-details/display-employee-details.component';
import { EditEmployeeDetailsComponent } from './edit-employee-details/edit-employee-details.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { SuccessComponent } from './success/success.component';
import { FailedComponent } from './failed/failed.component';
import {AuthorizationService} from './authorization.service';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { RimgtestComponent } from './rimgtest/rimgtest.component';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    PageNotFoundComponent,
    HomeComponent,
    EmployeeListComponent,
    EmployeeFilterPipe,
    DisplayEmployeeDetailsComponent,
    EditEmployeeDetailsComponent,
    AddNewEmployeeComponent,
    SuccessComponent,
    FailedComponent,
    AccessDeniedComponent,
    RimgtestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    OrderModule
  ],
  providers: [EnrollmentService,EmplistService,ListToDispalyService,AuthorizationService,AuthGuard,ListToEditService,SigninGuardGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
