import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LocationStrategy} from '@angular/common';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  
  constructor(private _router:Router,private location:LocationStrategy) {
    history.pushState(null,null,window.location.href);
    this.location.onPopState(()=>{
      history.pushState(null,null,window.location.href);
    })
   }

  ngOnInit(): void {
    setTimeout(()=>{
      this._router.navigate(['employee-list']);
    },7000);
  }

}
