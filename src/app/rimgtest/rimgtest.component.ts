import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpEventType} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-rimgtest',
  templateUrl: './rimgtest.component.html',
  styleUrls: ['./rimgtest.component.css']
})
export class RimgtestComponent implements OnInit {
  searchId:number
  url="assets/beach.jpg"
  retrievedImage:any;
  base64Data:any;
  retrieveResponse:any;
  message:any;
  imageName:any;
  constructor(private httpClient:HttpClient,private _domSanitizer:DomSanitizer) { }
 _getImageurl="http://localhost:3000/getimage";
  ngOnInit(): void {
  }

  getImage(){
    console.log("Reriving image")
    console.log("Id is",this.searchId)
    let formdata:FormData=new FormData();
    formdata.append("id",String(this.searchId));
    this.httpClient.post(this._getImageurl,formdata,{
      reportProgress:true
    }).subscribe(
      data=>{
        //console.log(data['ImageData']['data'])
        //this.retrievedImage=data['ImageData']['data']
        var reader = new FileReader();
        //console.log(btoa(data['ImageData']['data']))
        console.log(data['ImageData']);
        let TYPED_ARRAY=new Uint8Array(data['ImageData']['data']);
        //const STRING_CHAR=String.fromCharCode.apply(null,TYPED_ARRAY);
        const STRING_CHAR=TYPED_ARRAY.reduce((data,byte)=>{
          return data+String.fromCharCode(byte)
        },'')
        let base64String=btoa(STRING_CHAR);
        this.retrievedImage=this._domSanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,'+base64String)
      },
      err=>{
        console.log(err)
      }
    )
  }

}
