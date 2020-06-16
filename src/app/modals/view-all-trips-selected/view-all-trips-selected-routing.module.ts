import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllTripsSelectedPage } from './view-all-trips-selected.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllTripsSelectedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllTripsSelectedPageRoutingModule {}
