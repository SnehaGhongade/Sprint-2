import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/property.service';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { TblProperty } from '../property/property.model';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
    
  })
  
  export class HomeComponent implements OnInit {
  
    
    constructor(private _Propertyservice: PropertyService,private _router:Router ,private _cartservice:CartService) { }
   
    public searchTerm:string ='';
    searchkey:string="";
   
    products: Array<TblProperty> = new Array<TblProperty>();
   
    
  
    ngOnInit(): void {
  
      this._Propertyservice.search.subscribe((val:any)=>{
        this.searchkey=val; })
     
  
      this._Propertyservice.getProperty().subscribe(res => {this.products = res;
        this.products.forEach((a :any) =>{
          Object.assign(a,{quantity:1});
        });
      })
      
    }
    
      buy(item: any){
        this._cartservice.addtoCart(item);
      
    }  
    
  }