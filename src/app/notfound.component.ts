import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: `
    <p class="display-4 mt-3 mx-auto w-50">
      404: Page not found
    </p>
  `,
  styles: []
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
