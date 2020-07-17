import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservablesListComponent } from './list/observables-list.component';
import { EvensObservableComponent } from './evens/evens-observable.component';
import { OperatorsObservableComponent } from './operators/operators-observable.component';
import { SimpleObservableComponent } from './simple/simple-observable.component';
import { OddsObservableComponent } from './odds/odds-observable.component';
import { ObservablesRoutingModule } from './observables-routing.module';


@NgModule({
  declarations: [ObservablesListComponent, EvensObservableComponent,
    OperatorsObservableComponent, SimpleObservableComponent, OddsObservableComponent],
  imports: [
    CommonModule, ObservablesRoutingModule
  ]
})
export class ObservablesModule { }
