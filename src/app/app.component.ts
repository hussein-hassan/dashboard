import {Component, isDevMode, OnInit} from '@angular/core';
import {Helpers} from './core/functions/helpers.functions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    Helpers();
    if (!isDevMode()) {
      window.console.log = function () {

      }
    }
  }
}
