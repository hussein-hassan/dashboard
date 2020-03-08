import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {FeaturesComponent} from "./features.component";
import {AddUserComponent} from "./users/add-user/add-user.component";
import {EditUserComponent} from "./users/edit-user/edit-user.component";
import {DeleteUserComponent} from "./users/delete-user/delete-user.component";
import {OrdersComponent} from "./orders/orders.component";
import {AddOrderComponent} from "./orders/add-order/add-order.component";
import {EditOrderComponent} from "./orders/edit-order/edit-order.component";
import {DeleteOrderComponent} from "./orders/delete-order/delete-order.component";
import {AuthGuard} from "../core/guards/auth.guard";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {
        path: '', component: FeaturesComponent, children: [
            {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
            {
                path: 'users', component: UsersComponent, canActivate: [AuthGuard], children: [
                    {path: 'add-user', component: AddUserComponent, canActivate: [AuthGuard]},
                    {path: 'edit-user', component: EditUserComponent, canActivate: [AuthGuard]},
                    {path: 'delete-user', component: DeleteUserComponent, canActivate: [AuthGuard]},
                ]
            },
            {
                path: 'orders', component: OrdersComponent, canActivate: [AuthGuard], children: [
                    {path: 'add-order', component: AddOrderComponent, canActivate: [AuthGuard]},
                    {path: 'edit-order', component: EditOrderComponent, canActivate: [AuthGuard]},
                    {path: 'delete-order', component: DeleteOrderComponent, canActivate: [AuthGuard]},
                ]
            },
        ]
    },

];


@NgModule({
    declarations: [AddUserComponent, DeleteUserComponent, EditUserComponent,
        AddOrderComponent, EditOrderComponent, DeleteOrderComponent],
    imports: [
        RouterModule,
        [RouterModule.forChild(routes)]
    ]
})
export class FeaturesRoutingModule {
}
