import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from './home-main/home-main.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { LoginComponent } from './account/login/login.component';



@NgModule({
  declarations: [HomeMainComponent, LoginComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
