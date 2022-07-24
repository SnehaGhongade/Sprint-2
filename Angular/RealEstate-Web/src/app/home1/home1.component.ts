import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/property.service';
import { Router } from '@angular/router';
import { TblProperty } from '../property/property.model';
@Component({
    selector: 'app-home',
    templateUrl: './home1.component.html'
    
  })
  
  export class HomeComponent1 implements OnInit {
  
    
    constructor(private _Propertyservice: PropertyService,private _router:Router ) { }
   
    
   
    products: Array<TblProperty> = new Array<TblProperty>();
   
    
  
    ngOnInit(): void {
  
      
      this._Propertyservice.getProperty().subscribe(res => {this.products = res;
        this.products.forEach((a :any) =>{
          Object.assign(a,{quantity:1});
        });
      })
      
    }
    
      
    
  }