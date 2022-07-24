
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
       
        this.formLoginGroup.addControl("propertyNameControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("propertyDescriptionControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("propertyImageControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("propertySizeControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("propertylocationControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("propertyPriceControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("discountControl",new FormControl('',Validators.required));


}}