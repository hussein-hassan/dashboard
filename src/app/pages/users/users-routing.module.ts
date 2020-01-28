import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./users.component";
import {AddUserComponent} from "./add-user/add-user.component";

const routes: Routes = [
    {
        path: 'users', component: UsersComponent, children: [
            {path: 'addUser', component: AddUserComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {
}
