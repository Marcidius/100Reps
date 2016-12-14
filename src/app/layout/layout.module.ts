import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

import { LayoutComponent }  from './layout.component';
import { HeaderComponent }  from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    imports: [RouterModule, AlertModule, DropdownModule],
    exports: [ 
        LayoutComponent
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent
    ],
    providers: []
})
export class LayoutModule { }
