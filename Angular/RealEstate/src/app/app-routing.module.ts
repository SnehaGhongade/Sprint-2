import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailablepropertyComponent } from './availableproperty/availableproperty.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { PropertyComponent } from './property/property.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'property',
    component: PropertyComponent
  },
  {
    path: 'availableproperty',
    component: AvailablepropertyComponent
  },
  {
    path:'order',
    component:OrderComponent


  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
