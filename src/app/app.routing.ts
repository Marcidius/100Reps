import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent }   from './layout/layout.component';

export const routes: Routes = [  
  { 
    path: '', component: LayoutComponent,
      children: [
        { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }
      ]
  },
  { path: 'login', loadChildren: './login/login.module#LoginModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }

export const RoutingComponents = [
];