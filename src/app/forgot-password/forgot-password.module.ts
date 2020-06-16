import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';

import { ForgotPasswordPage } from './forgot-password.page';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    ForgotPasswordPageRoutingModule,
    CommonModule
  ],
  declarations: [ForgotPasswordPage]
})
export class ForgotPasswordPageModule { }
