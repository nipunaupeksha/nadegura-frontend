import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceSelectPage } from './service-select.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceSelectPageRoutingModule {}
