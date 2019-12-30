import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { ModalComponent } from './components/modal/modal.component';
import { LoginComponent } from './pages/login/login.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AddComponent } from './pages/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BreadcrumbsComponent,
    HomeComponent,
    UsersTableComponent,
    OrdersTableComponent,
    NotFoundComponent,
    AccessDeniedComponent,
    ModalComponent,
    LoginComponent,
    AddUserComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
