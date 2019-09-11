import { Component } from '@angular/core';

import { SwagComponent } from 'swag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private swagtest: SwagComponent) {
  }

  title = 'main';
}
