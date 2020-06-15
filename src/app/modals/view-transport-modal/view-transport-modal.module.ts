import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewTransportModalPageRoutingModule } from './view-transport-modal-routing.module';

import { ViewTransportModalPage } from './view-transport-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewTransportModalPageRoutingModule
  ],
  declarations: [ViewTransportModalPage]
})
export class ViewTransportModalPageModule {}
