import {NgForm,FormGroup,Validators,FormBuilder,FormControl} from '@angular/forms';



export class UserData{

    userName:string='';
    password:string='';
    email:string='';
    mobileNumber:number=0;
    isVender:number=0;

    formLoginGroup:FormGroup;
    constructor(){
        var _builder=new FormBuilder();
        this.formLoginGroup=_builder.group({});
        this.formLoginGroup.addControl("UserNameControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("PasswordControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("EmailControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("MobileControl",new FormControl('',Validators.required));

    }
    
}