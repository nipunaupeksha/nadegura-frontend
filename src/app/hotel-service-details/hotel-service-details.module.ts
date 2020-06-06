import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelServiceDetailsPageRoutingModule } from './hotel-service-details-routing.module';

import { HotelServiceDetailsPage } from './hotel-service-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelServiceDetailsPageRoutingModule
  ],
  declarations: [HotelServiceDetailsPage]
})
export class HotelServiceDetailsPageModule {}
