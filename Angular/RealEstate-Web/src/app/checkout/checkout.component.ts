import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { order } from '../models/order';
import { PropertyService } from '../services/property.service';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService : CartService,private jwt: JwtHelperService, public httpc: HttpClient, private _propertyservice: PropertyService, private _router: Router, private _auth: AuthService) { }
  //username: string = '';
  //HouseItemIds=[];
  grandtotal=0.0;
  ngOnInit(): void {
   // this.username = this.jwt.decodeToken(this._auth.getToken()?.toString())?.unique_name;
    //this.HouseItemIds=this.cartService.getHouseItemIds();
  }

  addhouse: order = new order();
  addhouses: Array<order> = new Array<order>();

  AddHouse() {
    var route = this._router;
    var addo = {
      firstName: this.addhouse.firstName,
      lastName: this.addhouse.lastName,
      Email: this.addhouse.email,
      PhoneNo: this.addhouse.phoneNo,
      Address: this.addhouse.address,
      paymentmode: this.addhouse.paymentmode,
      //username: this.username,
     // foodItemIds:this.FoodItemIds
    }

    this.httpc.post("https://localhost:44338/api/Order", addo).subscribe(res => { route.navigate(['/finalorder']); }, res => console.log(res));
    this.cartService.removeAllCart();
    this.addhouse = new order();
  }
  Show() {
    console.log("Hi");
    this.httpc.get("https://localhost:44338/api/Order").subscribe(res => this.GetSuccess(res), res => this.GetError(res));
  }
  GetSuccess(input: any) {
    this.addhouse = input;
  }
  GetError(input: any) {
    console.log(input);
  }
}