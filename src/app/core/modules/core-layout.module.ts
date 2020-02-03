import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "../components/header/header.component";
import {FooterComponent} from "../components/footer/footer.component";
import {SidebarComponent} from "../components/sidebar/sidebar.component";
import {BreadcrumbsComponent} from "../components/breadcrumbs/breadcrumbs.component";
import {RouterModule} from "@angular/router";
import {ModalComponent} from "../components/modal/modal.component";


@NgModule({
    declarations: [HeaderComponent, FooterComponent, SidebarComponent, BreadcrumbsComponent, ModalComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [HeaderComponent, FooterComponent, SidebarComponent, BreadcrumbsComponent, ModalComponent]
})
export class CoreLayoutModule {
}
