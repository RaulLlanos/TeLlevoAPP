import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthScreenPageRoutingModule } from './auth-screen-routing.module';

import { AuthScreenPage } from './auth-screen.page';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AuthScreenPageRoutingModule,
    FormsModule
  ],
  declarations: [AuthScreenPage, SignInComponent, SignUpComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthScreenPageModule {}
