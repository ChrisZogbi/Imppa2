import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'google-login',
  templateUrl: 'google-login.component.html',
  styleUrls: ['google-login.component.scss'],
})

export class GoogleLoginComponent implements OnInit {
  user: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private gplus: GooglePlus,
    private platform: Platform) {
    this.user = this.afAuth.authState;
  }

  ngOnInit() { }

  googleLogin() {
    if (!this.platform.is('cordova')) {
      this.nativeGoogleLogin();
    } else {
      this.webGoogleLogin();
    }
  }


  async nativeGoogleLogin(): Promise<firebase.auth.UserCredential> {
    try {
      const gplusUser = await this.gplus.login({
        'webClientId': '516433197843-51nalpios0fr9mkamstgahmn3vjigjc1.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      });

      const credential = firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken);

      return await this.afAuth.auth.signInWithCredential(credential);

    } catch (err) {
      console.log(err);
    }
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);

    } catch (err) {
      console.log(err);
    }
  }

  signOut() {
    this.afAuth.auth.signOut();
    if (this.platform.is('cordova')) {
      this.gplus.logout();
    }
  }

}
