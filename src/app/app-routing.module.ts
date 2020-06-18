import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'manager',
  loadChildren: () =>
    import('./modules/manager/manager.module').then(
      (m) => m.ManagerModule
    ),
},
{
  path: '',
  loadChildren: () =>
    import('./modules/customer/customer.module').then(
      (m) => m.CustomerModule
    ),
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
