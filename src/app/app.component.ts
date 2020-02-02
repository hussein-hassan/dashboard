import {Component, OnInit} from '@angular/core';
import {Helpers} from './helpers.functions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngDashboard';
    isLogin: boolean;

  ngOnInit(): void {
    Helpers();
      console.log('style');
  }
}
