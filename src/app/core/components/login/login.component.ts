import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLogin = true;
  isRegister: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  registerUser() {
    this.isRegister = !this.isRegister;
    this.isLogin = false;
  }
}
