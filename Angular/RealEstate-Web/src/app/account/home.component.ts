import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/property.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'

})
export class HomeComponent implements OnInit {

    constructor(private _Propertyservice: PropertyService) { }

    public property: any;
    searchkey: string = "";
    ngOnInit(): void {
        this._Propertyservice.getProperty().subscribe(res => this.property = res, err => console.log(err))
        this._Propertyservice.search.subscribe((val: any) => {
            this.searchkey = val;
        })
    }

}