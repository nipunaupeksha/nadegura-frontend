import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewTransportVehiclesPageRoutingModule } from './view-transport-vehicles-routing.module';

import { ViewTransportVehiclesPage } from './view-transport-vehicles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewTransportVehiclesPageRoutingModule
  ],
  declarations: [ViewTransportVehiclesPage]
})
export class ViewTransportVehiclesPageModule {}
