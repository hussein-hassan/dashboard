import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserData} from "../../models/user-data.interface";
import {AuthService} from "../../services/auth.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy, UserData {
    username: string;
    password: string;
    private loginSubscription: Subscription;

    constructor(private _authService: AuthService) {
    }

    ngOnInit() {

    }

    ngOnDestroy(): void {
        if (this.loginSubscription) {
            this.loginSubscription.unsubscribe();
        }
    }

}
