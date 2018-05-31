import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PizzaDetailComponent }  from './pizza-detail/pizza-detail.component';
import { PizzaMainLayoutComponent } from './pizza-main-layout/pizza-main-layout.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: PizzaMainLayoutComponent },
  { path: 'detail/:id', component: PizzaDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}