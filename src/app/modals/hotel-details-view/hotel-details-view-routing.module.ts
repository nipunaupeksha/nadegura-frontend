import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelDetailsViewPage } from './hotel-details-view.page';

const routes: Routes = [
  {
    path: '',
    component: HotelDetailsViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelDetailsViewPageRoutingModule {}
