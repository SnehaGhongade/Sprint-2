import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/property.service';


@Component({
  selector: 'app-vender',
  templateUrl: './vendor.component.html'
 
})
export class VendorComponent implements OnInit {

  constructor(private _Propertyservice: PropertyService) { }

  public property : any ; 
   ngOnInit(): void {

    this._Propertyservice.getProperty().subscribe(res => this.property = res, err => console.log(err))
  }

}