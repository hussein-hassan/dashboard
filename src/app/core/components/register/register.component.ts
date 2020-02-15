import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Subscription} from 'rxjs';
import {UserData} from "../../models/user-data.interface";
import {FormBuilder, Validators} from "@angular/forms";
import {PasswordValidator} from "../../functions/validators/password.validators";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy, UserData {
    username: string;
    email?: string;
    password: string;
    confirmPassword?: string;
    role? = "agent";
    private authSubscription: Subscription;
    registrationForm = this._formBuilder.group({
        username: [this.username, [Validators.required, Validators.minLength(3), Validators.pattern('^[a-z](?!.*?[^\\na-z0-9]{2}).*?[a-z0-9]$'),
            Validators.maxLength(12)]],
        email: [this.email, [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
        password: [this.password, [Validators.required, Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).{6,15}$'), Validators.minLength(6)]],
        confirmPassword: [this.confirmPassword, [Validators.required]],
        role: this.role = 'agent'
    }, {validator: PasswordValidator});

    constructor(private _authService: AuthService, private _formBuilder: FormBuilder) {
    }

    get _username() {
        return this.registrationForm.get('username')
    }

    get _email() {
        return this.registrationForm.get('email')
    }

    get _password() {
        return this.registrationForm.get('password')
    }

    onSubmit() {
        console.log(this.registrationForm.value)
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
