import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportServiceDetailsPage } from './transport-service-details.page';

const routes: Routes = [
  {
    path: '',
    component: TransportServiceDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportServiceDetailsPageRoutingModule {}
