import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {FooterComponent} from './components/footer/footer.component';
import {BreadcrumbsComponent} from './components/breadcrumbs/breadcrumbs.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AccessDeniedComponent} from './components/access-denied/access-denied.component';
import {ModalComponent} from './components/modal/modal.component';
import {UsersModule} from "./pages/users/users.module";
import {HomeModule} from "./pages/home/home.module";
import {OrdersModule} from "./pages/orders/orders.module";
import {LoginModule} from "./pages/login/login.module";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        BreadcrumbsComponent,
        NotFoundComponent,
        AccessDeniedComponent,
        ModalComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LoginModule,
        HomeModule,
        UsersModule,
        OrdersModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
