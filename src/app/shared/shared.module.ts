import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService }  from './auth.service';
import { UserService }  from './user.service';

import { User } from './user';

@NgModule({
  imports: [
    CommonModule
  ], 
  exports: [],
  providers: [AuthService, UserService],
  declarations: [ User ]
})
export class SharedModule { }
