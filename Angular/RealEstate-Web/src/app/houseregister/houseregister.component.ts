import { Component, OnInit } from '@angular/core';
import { TblVenderProperty } from '../models/RegisterHouseData';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-houseregister',
    styleUrls: ['./houseregister.component.css'],

    templateUrl: './houseregister.component.html'

})
export class HouseregisterComponent {
    constructor(public httpc: HttpClient) { }
    files = [];
    isEdit=false;
    ngOnInit(): void {
        this.getHouse();
    }
    TblVenderPropertyModel: TblVenderProperty = new TblVenderProperty();
    TblVenderPropertyModels: Array<TblVenderProperty> = new Array<TblVenderProperty>();
    img: any;

    registerHouse() {

        console.log(this.TblVenderPropertyModel);
        var housedto = {

            propertyName: this.TblVenderPropertyModel.propertyName,
            propertyDescription: this.TblVenderPropertyModel.propertyDescription,
            propertyImage: this.TblVenderPropertyModel.propertyImage,
            propertySize: this.TblVenderPropertyModel.propertySize,
            propertylocation: this.TblVenderPropertyModel.propertylocation,
            propertyPrice: Number(this.TblVenderPropertyModel.propertyPrice),
            discount: Number(this.TblVenderPropertyModel.discount),
        }
        if(this.isEdit)
        {
          this.httpc.put("https://localhost:44338/api/RegisterHouse", housedto).subscribe(res => this.PostSuccess(res), res => this.PostError(res));
        }
        else
    {
        let filetoUpload=<File>this.files[0];
        const formData=new FormData();
        formData.append('file',filetoUpload,filetoUpload.name)
        this.httpc.post("https://localhost:44338/api/Upload",formData).subscribe(res=>{console.log(res); this.img=res;housedto.propertyImage=this.img.imageUrl;this.AddProperties(housedto);},res=>console.log(res));
    }
    
    this.TblVenderPropertyModel = new TblVenderProperty();
      }
      AddProperties(housedto:any)
      {
        this.httpc.post("https://localhost:44338/api/RegisterHouse", housedto).subscribe(res => this.PostSuccess(res), res => this.PostError(res));
      }


    PostSuccess(res: any) {
        console.log(res);

    }
    PostError(res: any) {
        console.log(res);
    }
    onFileChanged(event: any) {
        this.files = event.target.files;
    }
    DeleteHouse(input: TblVenderProperty) {
        var index = this.TblVenderPropertyModels.indexOf(input);
        this.TblVenderPropertyModels.splice(index, 1);
    }
    getHouse() {
        console.log("Hi");
        this.httpc.get("https://localhost:44338/api/RegisterHouse").subscribe(res => this.GetSuccess(res), res => this.GetError(res));
    }
    GetSuccess(input: any) {
        this.TblVenderPropertyModels = input;
    }
    GetError(input: any) {
        console.log(input);
    }
    hasError(typeofvalidator: string, controlname: string): Boolean {
        return this.TblVenderPropertyModel.formLoginGroup.controls[controlname].hasError(typeofvalidator);
    }

}