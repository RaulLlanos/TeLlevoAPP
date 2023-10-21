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
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, MatSidenavModule, MatToolbarModule,
  MatIconModule, MatButtonModule, BrowserAnimationsModule,
  AngularFireModule, AngularFireAuthModule, AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFirestoreModule, AngularFireStorageModule, AngularFireDatabaseModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
