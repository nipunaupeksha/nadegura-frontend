import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllTripsSelectedPageRoutingModule } from './view-all-trips-selected-routing.module';

import { ViewAllTripsSelectedPage } from './view-all-trips-selected.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllTripsSelectedPageRoutingModule
  ],
  declarations: [ViewAllTripsSelectedPage]
})
export class ViewAllTripsSelectedPageModule {}
