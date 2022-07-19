import { Component, OnInit } from '@angular/core';
import { RegisterHouseService } from '../services/register-house.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
  
})
export class AdminComponent implements OnInit {

  constructor(private RegisterHouseService:RegisterHouseService) { }

  public house : any ; 
   ngOnInit(): void {

    this.RegisterHouseService.getRequest().subscribe(res => this.house= res, err => console.log(err))
  }

}