import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { PropertyComponent } from './property/property.component';
import { HouseregisterComponent } from './houseregister/houseregister.component';
import { AdminComponent } from './admin/admin.component';
import { VendorComponent } from './vendor/vendor.component';
import { HomeComponent } from './account/home.component';
import { FilterPipe } from './shared/filter.pipe';
import { SseeOrderComponent } from './ssee-order/ssee-order.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { CartComponent } from './cart/cart.component';
import { HomeComponent1 } from './home1/home1.component';
import { MyorderComponent } from './myorder/myorder.component';
import { MyorderdetailsComponent } from './myorderdetails/myorderdetails.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent1,
    PropertyComponent,
    HomeComponent,
    HouseregisterComponent,
    VendorComponent,
    AdminComponent,
    FilterPipe,
    SseeOrderComponent,
    CartComponent,
    MyorderComponent,
    MyorderdetailsComponent,
    OrderdetailsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService,{provide:JWT_OPTIONS,useValue:JWT_OPTIONS},JwtHelperService],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }