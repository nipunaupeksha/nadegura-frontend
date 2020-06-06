import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommendedServicesPage } from './recommended-services.page';

const routes: Routes = [
  {
    path: '',
    component: RecommendedServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecommendedServicesPageRoutingModule {}
