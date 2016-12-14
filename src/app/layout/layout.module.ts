import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { HeaderComponent }   from './header/header.component';
import { SidebarComponent }   from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';

@NgModule({
    imports: [RouterModule, AlertModule],
    exports: [ 
        HeaderComponent,
        SidebarComponent,
        ContentComponent
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        ContentComponent
    ],
    providers: []
})
export class LayoutModule { }
