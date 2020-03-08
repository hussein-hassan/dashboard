import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from "./core/components/login/login.component";
import {CoreLayoutModule} from "./core/modules/core-layout.module";
import {NotFoundComponent} from "./core/components/not-found/not-found.component";
import {AccessDeniedComponent} from "./core/components/access-denied/access-denied.component";
import {RegisterComponent} from './core/components/register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthService} from "./core/services/auth.service";
import {AuthGuard} from "./core/guards/auth.guard";
import {TokenInterceptorService} from "./core/interceptors/token-interceptor.service";


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
        ReactiveFormsModule,
        HttpClientModule


    ],
    providers: [AuthService, AuthGuard, {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
