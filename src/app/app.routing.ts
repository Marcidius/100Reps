import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent }   from './layout/layout.component';
//import { DashboardModule } from './dashboard/dashboard.module';
import { LoginComponent }     from './login/login.component';

export const routes: Routes = [  
  { 
    path: '', component: LayoutComponent,
      children: [
        {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'}
      ]
  },
  { path: 'login', component: LoginComponent }

  // TODO: these routes are meant for ng router lazy loading but they are causing web-pack to fail.  Fix
  //{ path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  //{ path: 'login', loadChildren: './dashboard/login.module#LoginModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }

export const RoutingComponents = [
    // DashboardComponent,
    // LoginComponent
];