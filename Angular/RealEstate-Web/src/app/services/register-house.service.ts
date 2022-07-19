import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterHouseService {
  private _productUrl = "https://localhost:44338/api/RegisterHouse";
  constructor(private http: HttpClient,private _router:Router) { }

  
  getRequest() {
    return this.http.get<any>(this._productUrl);
  }

}