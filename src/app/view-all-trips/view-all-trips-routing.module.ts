import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllTripsPage } from './view-all-trips.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllTripsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllTripsPageRoutingModule {}
