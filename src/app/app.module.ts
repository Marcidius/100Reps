import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AlertModule }    from 'ng2-bootstrap/ng2-bootstrap';

import { LayoutModule }   from './layout/layout.module';
import { LoginModule } from './login/login.module';
import { SharedModule }   from './shared/shared.module';

import { AppRoutingModule, 
        RoutingComponents } from './app.routing';
import { AppComponent }     from './app.component';


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
    RouterModule,
    AlertModule,
    SharedModule
  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
