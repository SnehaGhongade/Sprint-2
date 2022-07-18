import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/property.service';


@Component({
  selector: 'app-availableproperty',
  templateUrl: './availableproperty.component.html',
  styleUrls: ['./availableproperty.component.css']
})
export class AvailablepropertyComponent implements OnInit {

  constructor(private _propertyservice: PropertyService) { }

  public property : any ; 
   ngOnInit(): void {

    this._propertyservice.getProperty().subscribe(res => this.property = res, err => console.log(err))
  }
  
 
}