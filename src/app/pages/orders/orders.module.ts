import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrdersComponent} from "./orders.component";
import {AddOrderComponent} from './add-order/add-order.component';
import {EditOrderComponent} from './edit-order/edit-order.component';
import {DeleteOrderComponent} from './delete-order/delete-order.component';
import {SearchOrdersComponent} from './search-orders/search-orders.component';
import {AppRoutingModule} from '../../app-routing.module';


@NgModule({
    declarations: [OrdersComponent, AddOrderComponent, EditOrderComponent, DeleteOrderComponent, SearchOrdersComponent],
    imports: [
        CommonModule,
        AppRoutingModule
    ]
})
export class OrdersModule {
}
