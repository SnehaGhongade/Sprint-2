import { Component, OnInit } from '@angular/core';
import { TblProperty } from './property.model';
import { HttpClient } from '@angular/common/http';
import { RegisterHouseService } from '../services/register-house.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html'
  
})
export class PropertyComponent implements OnInit {

  constructor(public httpc:HttpClient,private _RegisterHouseService: RegisterHouseService, private _router: Router) { }

  TblPropertyModel: TblProperty = new TblProperty();
  TblPropertyModels: Array<TblProperty> = new Array<TblProperty>();

  AddProperty() {
    console.log(this.TblPropertyModel);
    var propertydto={
      propertyName:this.TblPropertyModel.propertyName,
      userName:this.TblPropertyModel.userName,
      propertyDescription:this.TblPropertyModel.propertyDescription,
      propertyImage:this.TblPropertyModel.propertyImage,
      propertySize:this.TblPropertyModel.propertySize,
      propertylocation:this.TblPropertyModel.propertylocation,
      propertyPrice:Number(this.TblPropertyModel.propertyPrice),
      discount:Number(this.TblPropertyModel.discount),
 }
this.httpc.post("https://localhost:44338/api/Property",propertydto).subscribe(res=>this.PostSuccess(res),res=>this.PostError(res));

//Azure

//this.httpc.post("https://zagade123.azurewebsites.net/api/Property",propertydto).subscribe(res=>this.PostSuccess(res),res=>this.PostError(res));
    this.TblPropertyModel = new TblProperty();

}
PostSuccess(res:any){
  console.log(res);
  
}
PostError(res:any){
  console.log(res);
}

Add(input: TblProperty) {
  this.TblPropertyModel = input;
}

DeleteProperty(input: TblProperty) {
  var index=this.TblPropertyModels.indexOf(input);
  this.TblPropertyModels.splice(index,1);
}

getData(){
  console.log("Hi");
  this.httpc.get("https://localhost:44338/api/Property").subscribe(res=>this.GetSuccess(res),res=>this.GetError(res));

 //Azure
// this.httpc.get("https://zagade123.azurewebsites.net/api/Property").subscribe(res=>this.GetSuccess(res),res=>this.GetError(res));
}
GetSuccess(input:any){
  this.TblPropertyModels=input;
}
GetError(input:any){
  console.log(input);
}

public house : any ; 
   ngOnInit(): void {

    this._RegisterHouseService.getRequest().subscribe(res => this.house= res, err => console.log(err))
  }

  
}