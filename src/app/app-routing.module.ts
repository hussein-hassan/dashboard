import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {OrdersComponent} from "./pages/orders/orders.component";
import {UsersComponent} from "./pages/users/users.component";
import {AddUserComponent} from "./pages/users/add-user/add-user.component";
import {EditUserComponent} from "./pages/users/edit-user/edit-user.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'orders', component: OrdersComponent},
  {
    path: 'users', component: UsersComponent, children: [
      {path: 'addUser', component: AddUserComponent},
      {path: 'editUser', component: EditUserComponent},

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
