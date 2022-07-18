import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private _productUrl = "https://localhost:44338/api/Property";
  constructor(private http: HttpClient,private _router:Router) { }

  
  getProperty() {
    return this.http.get<any>(this._productUrl);
  }

}