import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { PropertyComponent } from './property/property.component';
import { OrderComponent } from './order/order.component';
import { HouseregisterComponent } from './houseregister/houseregister.component';
import { AdminComponent } from './admin/admin.component';
import { AccountComponent } from './account/account.component';
import { VendorComponent } from './vendor/vendor.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './shared/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    PropertyComponent,
    OrderComponent,
    HomeComponent,
    HouseregisterComponent,
    VendorComponent,
    AdminComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }