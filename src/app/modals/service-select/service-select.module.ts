import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceSelectPageRoutingModule } from './service-select-routing.module';

import { ServiceSelectPage } from './service-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceSelectPageRoutingModule
  ],
  declarations: [ServiceSelectPage]
})
export class ServiceSelectPageModule {}
