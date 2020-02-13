import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from "./core/components/login/login.component";
import {CoreLayoutModule} from "./core/modules/core-layout.module";
import {NotFoundComponent} from "./core/components/not-found/not-found.component";
import {AccessDeniedComponent} from "./core/components/access-denied/access-denied.component";
import {RegisterComponent} from './core/components/register/register.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./core/services/auth.service";


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NotFoundComponent,
        AccessDeniedComponent,
        RegisterComponent

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreLayoutModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule


    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
