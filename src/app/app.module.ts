import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {FirebaseAppModule} from "@angular/fire/app";
import {AngularFireModule} from "@angular/fire/compat";
import {config} from "../../firebase-credentials";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
