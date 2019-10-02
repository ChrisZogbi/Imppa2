import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {GooglePlus} from '@ionic-native/google-plus/ngx';

var firebaseConfig = {
  apiKey: "AIzaSyD_eLFruVnK_vf6HUAKs2BEMwft3bboU80",
  authDomain: "imppa-test.firebaseapp.com",
  databaseURL: "https://imppa-test.firebaseio.com",
  projectId: "imppa-test",
  storageBucket: "",
  messagingSenderId: "516433197843",
  appId: "1:516433197843:web:fa02a8b04c0929d591f8e6",
  measurementId: "G-BR0HD1PKPC"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    GooglePlus,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NativeStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
