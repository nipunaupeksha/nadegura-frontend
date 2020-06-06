import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransportDetailsViewPageRoutingModule } from './transport-details-view-routing.module';

import { TransportDetailsViewPage } from './transport-details-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransportDetailsViewPageRoutingModule
  ],
  declarations: [TransportDetailsViewPage]
})
export class TransportDetailsViewPageModule {}
