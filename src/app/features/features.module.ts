import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeModule} from "./home/home.module";
import {UsersModule} from "./users/users.module";
import {OrdersModule} from "./orders/orders.module";
import {FeaturesComponent} from './features.component';
import {CoreLayoutModule} from "../core/modules/core-layout.module";
import {FeaturesRoutingModule} from "./features-routing.module";
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [FeaturesComponent],
    imports: [
        CommonModule,
        HomeModule,
        UsersModule,
        OrdersModule,
        CoreLayoutModule,
        RouterModule,
        FeaturesRoutingModule
    ]
})
export class FeaturesModule {
}
