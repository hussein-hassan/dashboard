import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {OrdersComponent} from "./pages/orders/orders.component";
import {UsersComponent} from "./pages/users/users.component";
import {AddUserComponent} from "./pages/users/add-user/add-user.component";
import {EditUserComponent} from "./pages/users/edit-user/edit-user.component";
import {AddOrderComponent} from "./pages/orders/add-order/add-order.component";
import {EditOrderComponent} from "./pages/orders/edit-order/edit-order.component";
import {DeleteOrderComponent} from "./pages/orders/delete-order/delete-order.component";
import {DeleteUserComponent} from "./pages/users/delete-user/delete-user.component";
import {SearchUsersComponent} from "./pages/users/search-users/search-users.component";
import {SearchOrdersComponent} from "./pages/orders/search-orders/search-orders.component";


const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {
        path: 'orders', component: OrdersComponent, children: [
            {path: 'search-orders', component: SearchOrdersComponent},
            {path: 'add-order', component: AddOrderComponent},
            {path: 'edit-order', component: EditOrderComponent},
            {path: 'delete-order', component: DeleteOrderComponent},
        ]
    },
    {
        path: 'manage-users', component: UsersComponent, children: [
            {path: 'search-users', component: SearchUsersComponent},
            {path: 'add-user', component: AddUserComponent},
            {path: 'edit-user', component: EditUserComponent},
            {path: 'delete-user', component: DeleteUserComponent},
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
