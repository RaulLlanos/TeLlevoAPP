import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AuthScreenPageRoutingModule } from './auth-screen-routing.module';


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthScreenPageRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthScreenPageModule {}
