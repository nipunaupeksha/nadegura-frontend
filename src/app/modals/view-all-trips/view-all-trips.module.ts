import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { ViewAllTripsPageRoutingModule } from './view-all-trips-routing.module';

import { ViewAllTripsPage } from './view-all-trips.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllTripsPageRoutingModule,
    BrowserModule
  ],
  declarations: [ViewAllTripsPage]
})
export class ViewAllTripsPageModule {}
