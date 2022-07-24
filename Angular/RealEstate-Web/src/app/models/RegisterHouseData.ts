
import {NgForm,FormGroup,Validators,FormBuilder,FormControl} from '@angular/forms';


export class TblVenderProperty{
    id:number=0;
   
    propertyName:string='';
    propertyDescription:string='';
    propertyImage:string='';
    propertySize:string='';
    propertylocation:string='';
    propertyPrice:number=0;
    discount:number=0;

    formLoginGroup:FormGroup;
    constructor(){
        var _builder=new FormBuilder();
        this.formLoginGroup=_builder.group({});
       
        this.formLoginGroup.addControl("propertyName",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("propertyDescription",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("propertyImage",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("propertySize",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("propertylocation",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("propertyPrice",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("discount",new FormControl('',Validators.required));


}}