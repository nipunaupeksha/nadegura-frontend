import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewTransportModalPage } from './view-transport-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ViewTransportModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewTransportModalPageRoutingModule {}
