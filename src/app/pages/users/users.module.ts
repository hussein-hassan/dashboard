import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from "./users.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {EditUserComponent} from './edit-user/edit-user.component';
import {DeleteUserComponent} from './delete-user/delete-user.component';
import {AppRoutingModule} from '../../app-routing.module'

@NgModule({
    declarations: [UsersComponent, AddUserComponent, EditUserComponent, DeleteUserComponent],
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    exports: [UsersComponent]
})
export class UsersModule {
}
