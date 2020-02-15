import {Component, OnInit} from '@angular/core';
import {UserData} from "../../models/user-data.interface";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, UserData {
    username: string;
    password: string;

    constructor() {
    }

    ngOnInit() {

    }

}
