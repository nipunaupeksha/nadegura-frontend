import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransportModalPageRoutingModule } from './transport-modal-routing.module';

import { TransportModalPage } from './transport-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransportModalPageRoutingModule
  ],
  declarations: [TransportModalPage]
})
export class TransportModalPageModule {}
