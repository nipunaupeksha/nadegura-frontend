import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripRecommenderPageRoutingModule } from './trip-recommender-routing.module';

import { TripRecommenderPage } from './trip-recommender.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripRecommenderPageRoutingModule
  ],
  declarations: [TripRecommenderPage]
})
export class TripRecommenderPageModule {}
