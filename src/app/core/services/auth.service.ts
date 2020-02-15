import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserData} from "../models/user-data.interface";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _registerUrl = 'http://localhost:3000/auth/register';
    private _loginUrl = 'http://localhost:3000/auth/login';

    constructor(private http: HttpClient) {
    }

    register(userData: UserData) {
        return this.http.post<any>(this._registerUrl, userData)
    }

    login(userData: UserData) {
        return this.http.post<any>(this._loginUrl, userData)
    }
}
