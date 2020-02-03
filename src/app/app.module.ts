import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from "./core/components/login/login.component";
import {CoreLayoutModule} from "./core/modules/core-layout.module";
import {NotFoundComponent} from "./core/components/not-found/not-found.component";
import {AccessDeniedComponent} from "./core/components/access-denied/access-denied.component";


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NotFoundComponent,
        AccessDeniedComponent

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreLayoutModule,
        AppRoutingModule


    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
