import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// BrowserAnimationsModule (es de Angular, no de Angular/material pero sin esto no puedo usar las siguientes Apis de Angular/material)
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// API reference for Angular Material sidenav
import {MatSidenavModule} from '@angular/material/sidenav';
// API reference for Angular Material toolbar
import {MatToolbarModule} from '@angular/material/toolbar';
// API reference for Angular Material icon
import {MatIconModule} from '@angular/material/icon';
// API reference for Angular Material button
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, BrowserAnimationsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
