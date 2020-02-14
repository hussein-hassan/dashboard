import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Subscription} from 'rxjs';
import {RegisterUserData} from "../../models/register-user-data";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
    registerUserData = new RegisterUserData();
    private authSubscription: Subscription;

    constructor(private _auth: AuthService) {
    }

    ngOnInit() {
        console.log(this.registerUserData)
    }

    ngOnDestroy(): void {
    }

    registerUser() {
        this._auth.registerUser(this.registerUserData).subscribe(
            res => {
                console.log(res)
            },
            error => {
                console.log(error)
            })
    }
}
