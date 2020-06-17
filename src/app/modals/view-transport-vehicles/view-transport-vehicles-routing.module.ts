import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewTransportVehiclesPage } from './view-transport-vehicles.page';

const routes: Routes = [
  {
    path: '',
    component: ViewTransportVehiclesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewTransportVehiclesPageRoutingModule {}
