import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrdersComponent} from "./orders.component";
import {AddOrderComponent} from './add-order/add-order.component';
import {EditOrderComponent} from './edit-order/edit-order.component';
import {DeleteOrderComponent} from './delete-order/delete-order.component';


@NgModule({
    declarations: [OrdersComponent, AddOrderComponent, EditOrderComponent, DeleteOrderComponent],
    imports: [
        CommonModule
    ]
})
export class OrdersModule {
}
