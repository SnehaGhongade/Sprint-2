import { Component, OnInit } from '@angular/core';
import { orderbooking } from './order.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  constructor(public httpc:HttpClient) { }

  orderModel: orderbooking = new orderbooking();
  orderModels: Array<orderbooking> = new Array<orderbooking>();

  Addorder() {
    console.log(this.orderModel);
    var orderto={
      firstname:this.orderModel.firstname,
      lastname:this.orderModel.lastname,
      email:this.orderModel.email,
      address:this.orderModel.address,
      country:this.orderModel.country,
      state:this.orderModel.state
 }
 this.httpc.post("https://localhost:44338/api/orderbooking",orderto).subscribe(res=>this.PostSuccess(res),res=>this.PostError(res));
    this.orderModel = new orderbooking();

}
PostSuccess(res:any){
  console.log(res);
  
}
PostError(res:any){
  console.log(res);
}

}
