import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../services/property.service';
@Component({
  selector: 'app-myorderdetails',
  templateUrl: './myorderdetails.component.html'
})
export class MyorderdetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private _propertyservice:PropertyService) { }
  orderId:any='';
  myordersDetailsModels:any;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => { 
      this.orderId=params;
    });
   // this._propertyservice.getMyOrdersDetails(this.orderId.orderid).subscribe(res=>{this.myordersDetailsModels=res;});
   // this.orderId.orderid
  }

  CancelOrder(input:any){

  }
}