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

    registerUser() {
        this.authSubscription = this._auth.registerUser(this.registerUserData).subscribe(
            res => {
                console.log(res)
            },
            error => {
                console.log(error)
            })

    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
        if (this.authSubscription) {
            this.authSubscription.unsubscribe();
            console.log('un subscribed')
        }
    }

}
