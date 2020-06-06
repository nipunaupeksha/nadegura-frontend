import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelServiceDetailsPage } from './hotel-service-details.page';

const routes: Routes = [
  {
    path: '',
    component: HotelServiceDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelServiceDetailsPageRoutingModule {}
