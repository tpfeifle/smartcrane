import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { UnmatchedWeightsComponent } from './unmatched-weights/unmatched-weights.component';

const routes: Routes = [
  {
    path: 'order-detail/:id',
    component: OrderDetailComponent
  },
  {
    path: 'unmatched-weights',
    component: UnmatchedWeightsComponent
  },
  {
    path: '',
    component: DeliveriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
