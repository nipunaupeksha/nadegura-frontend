import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewTripDetailsPage } from './view-trip-details.page';

const routes: Routes = [
  {
    path: '',
    component: ViewTripDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewTripDetailsPageRoutingModule {}
