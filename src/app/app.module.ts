import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as firebase from "firebase";

const firebaseConfig= {
  apiKey: "AIzaSyBgAUzmh9gcF4g6Sm4GsTV_Oyk8Y8pWSj0",
  authDomain: "ginfo4logintest-7e9aa.firebaseapp.com",
  databaseURL: "https://ginfo4logintest-7e9aa.firebaseio.com",
  projectId: "ginfo4logintest-7e9aa",
  storageBucket: "ginfo4logintest-7e9aa.appspot.com",
  messagingSenderId: "349844838901",
  appId: "1:349844838901:web:bc41c2ee730512524e68bc",
  measurementId: "G-K8MKGQ9GP7"
};
firebase.initializeApp(firebaseConfig)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  

})

export class AppModule { }
