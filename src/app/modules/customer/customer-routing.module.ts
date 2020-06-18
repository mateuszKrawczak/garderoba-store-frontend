import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeMainComponent } from './home-main/home-main.component';
import { LoginComponent } from './account/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeMainComponent,
    children: [
      {
        path: '',
        //redirectTo: 'login',
        component: HomeMainComponent,
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
