import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/property.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
public searchTerm:string ='';
  constructor(private _Propertyservice: PropertyService) { }

  public property : any ; 
  searchkey:string="";
   ngOnInit(): void {

    this._Propertyservice.getProperty().subscribe(res => this.property = res, err => console.log(err))
    this._Propertyservice.search.subscribe((val:any)=>{
      this.searchkey=val;
    })
  }



}

