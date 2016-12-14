import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
