 import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserData } from '../models/UserData';
import { order } from '../models/order';
import { AuthService } from '../services/auth.service';
import { PropertyService } from '../services/property.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html'
})
export class MyorderComponent implements OnInit {

  constructor(private jwt: JwtHelperService, private _auth: AuthService, private _router: Router, private http: HttpClient, private _propertyservice: PropertyService) { }
  myordersModels: any;
  username: string = '';
  users: Array<UserData> = new Array<UserData>();

  ngOnInit(): void {
    this.username = this.jwt.decodeToken(this._auth.getToken()?.toString())?.unique_name;

    //this._propertyservice.getMyOrders(this.username).subscribe(res => { this.myordersModels = res; });
  }

  ViewDetails(input: any) {
    this._router.navigate(['/myorderdetails'], { queryParams: { orderid: input } });
  }

} 