import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewHotelModalPageRoutingModule } from './view-hotel-modal-routing.module';

import { ViewHotelModalPage } from './view-hotel-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewHotelModalPageRoutingModule
  ],
  declarations: [ViewHotelModalPage]
})
export class ViewHotelModalPageModule {}
