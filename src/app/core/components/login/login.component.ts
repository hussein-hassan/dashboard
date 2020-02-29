import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserData} from "../../models/user-data.interface";
import {AuthService} from "../../services/auth.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy, UserData {
    username: string;
    password: string;
    errorMsg: any;
    loginSubscription: Subscription;
    loginFormValues: UserData = {
        username: this.username,
        password: this.password
    };
    constructor(private _authService: AuthService, private router: Router) {
    }

    ngOnInit() {

    }

    ngOnDestroy(): void {
        if (this.loginSubscription) {
            this.loginSubscription.unsubscribe();
        }
    }

    onSubmit() {

        this.loginSubscription = this._authService.login(this.loginFormValues).subscribe(
            response => {
                console.log(this.loginFormValues);
                this.router.navigate(['/home'])

            },
            error => {
                console.log(error);
                this.errorMsg = error.error.message;
            }
        )
    }
}
