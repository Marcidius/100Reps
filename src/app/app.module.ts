import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';

// import { DashboardModule }    from './dashboard/dashboard.module'
// import { LoginModule }        from './login/login.module';
import { AppRoutingModule, 
          RoutingComponents } from './app.routing';

import { AppComponent }       from './app.component';
import { LayoutModule }       from './layout/layout.module';


@NgModule({
  declarations: [
    AppComponent, 
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    LayoutModule,
    RouterModule
    //DashboardModule
    //LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
