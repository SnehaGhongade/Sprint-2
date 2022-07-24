import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { order } from '../models/order';
import { PropertyService} from '../services/property.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-addfood',
  templateUrl: './orderdetails.component.html',
})
export class OrderdetailsComponent implements OnInit {

  constructor(public httpc: HttpClient, private _propertyservice: PropertyService, private _router: Router) { }

  ngOnInit(): void {
    this.Show();
  }

  addhouse: order = new order();
  addhouses: Array<order> = new Array<order>();

  Show() {
    console.log("Hi");
    this.httpc.get("https://localhost:44338/api/Order ").subscribe(res => this.GetSuccess(res), res => this.GetError(res));
  }
  GetSuccess(input: any) {
    this.addhouses = input;
  }
  GetError(input: any) {
    console.log(input);
  }


}