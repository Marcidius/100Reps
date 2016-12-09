import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';
//import { SampleComponent } from './sample/sample.component.ts';

const routes: Routes = [  
  //{ path: '', pathMatch: 'full', redirectTo: 'sample' }
  //{ path: 'sample', component: SampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [
    //SampleComponent
];  