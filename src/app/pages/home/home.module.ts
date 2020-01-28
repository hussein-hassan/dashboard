import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {UsersModule} from "../users/users.module";


@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        UsersModule
    ]
})
export class HomeModule {
}
