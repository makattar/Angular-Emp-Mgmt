import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {DeletedemployeeService} from '../dashboardServices/deletedemployee.service';
import { EmpbydeptService } from '../dashboardServices/empbydept.service';
import {JoinedemployeeService} from '../dashboardServices/joinedemployee.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  temp = [];
  temp2=[];
  canShowData=false;
  canShowPie=false;
  canShowJoinChart=false;
  constructor(private _dashdelser:DeletedemployeeService,private _empbydept:EmpbydeptService,private _joinedempser:JoinedemployeeService) { }
  //Deleted Employee data for plot
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio:false,
    title: {
      display: true,
      text: ['Number Of Employees Exited','With respect to date'],
      fontFamily:'Helvetica Neue'
  } ,
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Number Of Employees'
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Date'
      }
    }]
  }     
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];//xpoints
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'X label',fill:false,borderColor:'rgba(0, 0, 255, 1)'}//y points
  ];
  //Pie chart data
  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';
  public pieChartOptions={
    scaleShowVerticalLines: true,
    responsive: true,
    maintainAspectRatio:false,
    title: {
      display: true,
      text: ['Employees With Respect ','To Department'],
      fontFamily:'Helvetica Neue'
  } 
  }
  //Joined employee data for plot
  public joinedChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    maintainAspectRatio:false,
    title: {
      display: true,
      text: ['Number Of Employees Joined','With respect to date'],
      fontFamily:'Helvetica Neue'
  } ,
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Number Of Employees'
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Date'
      }
    }]
  }
  };
  public joinedChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];//xpoints
  public joinedChartType = 'line';
  public joinedChartLegend = true;
  public joinedChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'X label',fill:false,borderColor:'rgba(0, 0, 255, 1)'}//y points
  ];
  ngOnInit(): void {
    //Get Data For Plot 01
    this._dashdelser.getDataToPlot().subscribe(
      data=>{
        console.log(data)
        //console.log(data["xpoints"])
        //console.log(data["ypoints"])
        this.barChartLabels=data["xpoints"]
        for (let i=0;i<data["ypoints"].length;i++){
          //console.log(data[i]["joindate"])
          //console.log(data[i].dataValues["no_date"])
          this.temp.push(parseInt(data["ypoints"][i]) )
      }
      this.barChartData=[
        {data:this.temp, label: 'Employee Deleted',fill:false,borderColor:'rgba(0, 0, 255, 1)'}
      ]
      this.canShowData=true;
      //console.log(this.temp)
    },
    err=>{
      console.log(err)
    }
    )//End Of Plot 01
    //Get data for plot 02
    this._empbydept.getDataToPlot().subscribe(
      data=>{
        console.log(data)
        this.pieChartLabels=data["xpoints"];
        this.pieChartData=data["ypoints"];
        this.canShowPie=true;
      },
      err=>{console.log(err.stack)}
    )//End of Plot 02
    //Get data for plot 03
    this._joinedempser.getDataToPlot().subscribe(
      data=>{
        console.log(data)
        //console.log(data["xpoints"])
        //console.log(data["ypoints"])
        this.joinedChartLabels=data["xpoints"]
        for (let i=0;i<data["ypoints"].length;i++){
          //console.log(data[i]["joindate"])
          //console.log(data[i].dataValues["no_date"])
          this.temp2.push(parseInt(data["ypoints"][i]) )
      }
      this.joinedChartData=[
        {data:this.temp2, label: 'Employee Joined',fill:false,borderColor:'rgba(0, 255, 0, 1)'}
      ]
      this.canShowJoinChart=true;
      //console.log(this.temp)
    },
    err=>{
      console.log(err)
    }
    )

  }

}
