import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {UsersModule} from "../users/users.module";
import {SharedComponentsModule} from "../../components/shared-components.module";


@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        UsersModule,
        SharedComponentsModule
    ]
})
export class HomeModule {
}
