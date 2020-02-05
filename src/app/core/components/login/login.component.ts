import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    isLogin = true;
    isRegister: boolean;
    formTitle: string;

    constructor() {
    }

    ngOnInit() {
        this.formTitle = 'Login';
        console.log(this.formTitle);
    }

    showRegisterForm() {
        this.isRegister = !this.isRegister;
        this.isLogin = false;
        this.formTitle = 'Register';
    }


    showLoginForm() {
        this.isLogin = !this.isLogin;
        this.isRegister = false;
        this.formTitle = 'Login';
    }
}
