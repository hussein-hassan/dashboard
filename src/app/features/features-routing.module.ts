import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {SearchUsersComponent} from "./users/search-users/search-users.component";
import {FeaturesComponent} from "./features.component";
import {AddUserComponent} from "./users/add-user/add-user.component";
import {EditUserComponent} from "./users/edit-user/edit-user.component";
import {DeleteUserComponent} from "./users/delete-user/delete-user.component";
import {OrdersComponent} from "./orders/orders.component";
import {AddOrderComponent} from "./orders/add-order/add-order.component";
import {EditOrderComponent} from "./orders/edit-order/edit-order.component";
import {DeleteOrderComponent} from "./orders/delete-order/delete-order.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: '', component: FeaturesComponent, children: [
      {path: 'home', component: HomeComponent},
      {
        path: 'users', component: UsersComponent, children: [
          {path: 'add-user', component: AddUserComponent},
          {path: 'edit-user', component: EditUserComponent},
          {path: 'delete-user', component: DeleteUserComponent},
        ]
      },
      {
        path: 'orders', component: OrdersComponent, children: [
          {path: 'add-order', component: AddOrderComponent},
          {path: 'edit-order', component: EditOrderComponent},
          {path: 'delete-order', component: DeleteOrderComponent},
        ]
      },
    ]
  },

];


@NgModule({
  declarations: [SearchUsersComponent, AddUserComponent, DeleteUserComponent, EditUserComponent,
    AddOrderComponent, EditOrderComponent, DeleteOrderComponent],
  imports: [
    RouterModule,
    [RouterModule.forChild(routes)]
  ]
})
export class FeaturesRoutingModule {
}
