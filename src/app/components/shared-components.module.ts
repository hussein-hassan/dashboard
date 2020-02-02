import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {BreadcrumbsComponent} from "./breadcrumbs/breadcrumbs.component";
import {AppRoutingModule} from "../app-routing.module";


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, BreadcrumbsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [HeaderComponent, SidebarComponent, FooterComponent, SidebarComponent, BreadcrumbsComponent]
})
export class SharedComponentsModule {
}
