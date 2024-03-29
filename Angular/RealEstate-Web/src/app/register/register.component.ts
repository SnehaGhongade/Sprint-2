import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../models/UserData';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData: UserData = new UserData();
  modelText:string="";
  modelHeader:string="";
  showSpinner:boolean=false;
  constructor(private _auth: AuthService,private _router:Router) { }

  ngOnInit(): void {
  }

  DisplayModalPopup(modelHeader:string,modelText:string){
    this.modelHeader=modelHeader;
    this.modelText=modelText;
    document.getElementById("btnLaunchModel")?.click();
  }
  ShowSpinner(){
    this.showSpinner=true;
  }
  HideSpinner(){
    this.showSpinner=false;
  }
  flagVendor(event: any) {
    if (event.target.value == 'User') {
      this.registerUserData.isVender = 0;
    } else {
      this.registerUserData.isVender = 1;
    }

  }
  registerUser() {

    if(this.registerUserData.userName==''|| this.registerUserData.password==''){
      this.DisplayModalPopup("Error","Please enter the username and password");
      return;
    }
    this.ShowSpinner();
    var userDataObject={
      userName:this.registerUserData.userName,
      password:this.registerUserData.password,
      isVender:this.registerUserData.isVender
    }
    this._auth.registerUser(userDataObject).subscribe(res => {
     this.HideSpinner();localStorage.setItem('token',res.token);
      this._router.navigate([''])
    console.log(res);
    if (res.isAdmin)
           this._router.navigate(['/admin']); 

    else if (res.isVender)
           this._router.navigate(['/vendor']);    

      else 
      this._router.navigate(['/account']);
  },
    err => {this.HideSpinner();console.log(err)});


  }

 hasError(typeofvalidator:string,controlname:string):Boolean{
    return this.registerUserData.formLoginGroup.controls[controlname].hasError(typeofvalidator);
  }
}