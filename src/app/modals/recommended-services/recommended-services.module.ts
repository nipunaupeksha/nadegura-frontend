import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecommendedServicesPageRoutingModule } from './recommended-services-routing.module';

import { RecommendedServicesPage } from './recommended-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecommendedServicesPageRoutingModule
  ],
  declarations: [RecommendedServicesPage]
})
export class RecommendedServicesPageModule {}
