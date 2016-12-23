import { NgModule, ModuleWithProviders }  from '@angular/core';
import { CommonModule }                   from '@angular/common';
import { Routes, RouterModule }           from '@angular/router';

import { LoginComponent } from './login.component';

const loginRoutes: Routes = [
  {path: '', component: LoginComponent }
];

export const loginRouting = RouterModule.forChild(loginRoutes); 

@NgModule({
  imports: [
    loginRouting,

    CommonModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
