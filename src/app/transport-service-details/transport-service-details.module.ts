import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransportServiceDetailsPageRoutingModule } from './transport-service-details-routing.module';

import { TransportServiceDetailsPage } from './transport-service-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransportServiceDetailsPageRoutingModule
  ],
  declarations: [TransportServiceDetailsPage]
})
export class TransportServiceDetailsPageModule {}
