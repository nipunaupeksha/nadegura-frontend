import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportModalPage } from './transport-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TransportModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportModalPageRoutingModule {}
