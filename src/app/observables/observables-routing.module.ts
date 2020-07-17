import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservablesListComponent } from './list/observables-list.component';


const routes: Routes = [
  {
    path: '',
    component: ObservablesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservablesRoutingModule { }
