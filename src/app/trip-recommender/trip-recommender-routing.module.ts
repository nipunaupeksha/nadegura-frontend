import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripRecommenderPage } from './trip-recommender.page';

const routes: Routes = [
  {
    path: '',
    component: TripRecommenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripRecommenderPageRoutingModule {}
