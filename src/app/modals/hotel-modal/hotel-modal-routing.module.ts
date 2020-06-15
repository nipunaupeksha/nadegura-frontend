import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelModalPage } from './hotel-modal.page';

const routes: Routes = [
  {
    path: '',
    component: HotelModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelModalPageRoutingModule {}
