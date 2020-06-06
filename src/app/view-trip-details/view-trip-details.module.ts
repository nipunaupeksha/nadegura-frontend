import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewTripDetailsPageRoutingModule } from './view-trip-details-routing.module';

import { ViewTripDetailsPage } from './view-trip-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewTripDetailsPageRoutingModule
  ],
  declarations: [ViewTripDetailsPage]
})
export class ViewTripDetailsPageModule {}
