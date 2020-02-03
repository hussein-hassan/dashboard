import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./users.component";
import {SearchUsersComponent} from "./search-users/search-users.component";

const routes: Routes = [
  {
    path: 'users', component: UsersComponent, children: [
      {path: 'search-users', component: SearchUsersComponent}
    ]
  }
];

@NgModule({
  declarations: [SearchUsersComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class UsersRoutingModule {
}
