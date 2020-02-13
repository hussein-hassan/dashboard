import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
    registerUserData = {};
    private authSubscription: Subscription;

    constructor(private _auth: AuthService) {
    }

    ngOnInit() {
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
