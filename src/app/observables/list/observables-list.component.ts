import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-observables-example",
  templateUrl: './observables-list.component.html'
})
export class ObservablesListComponent {
  isEvensOn = false;
  isOddsOn = false;
}
