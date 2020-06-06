import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportDetailsViewPage } from './transport-details-view.page';

const routes: Routes = [
  {
    path: '',
    component: TransportDetailsViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportDetailsViewPageRoutingModule {}
