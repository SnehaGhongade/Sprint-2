import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './account/home.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent1 } from './home1/home1.component';
import { HouseregisterComponent } from './houseregister/houseregister.component';
import { LoginComponent } from './login/login.component';
import { PropertyComponent } from './property/property.component';
import { RegisterComponent } from './register/register.component';
import { SseeOrderComponent } from './ssee-order/ssee-order.component';
import { VendorComponent } from './vendor/vendor.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent1
  },
  {
    path: 'account',
    component: HomeComponent
  },
  
  {
    path: 'home1',
    component:HomeComponent1
  },
  
  {
    path: 'houseregister',
    component: HouseregisterComponent
  },

  {
    path: 'vendor',
    component:VendorComponent
  },
  {
    path: 'checkout',
    component:CheckoutComponent
  },


  {
    path: 'admin',
    component: AdminComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },


  {
    path: 'property',
    component: PropertyComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'see-order',
    component: SseeOrderComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }