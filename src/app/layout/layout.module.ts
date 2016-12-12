import { NgModule } from '@angular/core';

import { HeaderComponent }   from './header/header.component';
import { SidebarComponent }   from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';

@NgModule({
    imports: [],
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
    providers: [],
})
export class LayoutModule { }
