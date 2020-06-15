import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewHotelModalPage } from './view-hotel-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ViewHotelModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewHotelModalPageRoutingModule {}
