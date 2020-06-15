import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelModalPageRoutingModule } from './hotel-modal-routing.module';

import { HotelModalPage } from './hotel-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelModalPageRoutingModule
  ],
  declarations: [HotelModalPage]
})
export class HotelModalPageModule {}
