import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelDetailsViewPageRoutingModule } from './hotel-details-view-routing.module';

import { HotelDetailsViewPage } from './hotel-details-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelDetailsViewPageRoutingModule
  ],
  declarations: [HotelDetailsViewPage]
})
export class HotelDetailsViewPageModule {}
