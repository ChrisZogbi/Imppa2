import { SignupStep1Component } from 'src/app/components/signup-step1/signup-step1.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert/alert.service';
import { SignupStep2Component } from 'src/app/components/signup-step2/signup-step2.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @ViewChild('signupSlider', {static: false}) signupSlider;
  @ViewChild(SignupStep1Component, {static: false}) step1: SignupStep1Component;
  @ViewChild(SignupStep2Component, {static: false}) step2: SignupStep2Component;

  constructor(private modalController: ModalController,
              private authService: AuthService,
              private navCtrl: NavController,
              private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  next() {
      this.signupSlider.slideNext();
  }

  prev() {
    this.signupSlider.slidePrev();
  }

  // On Login button tap, dismiss Register modal and open login Modal
  async loginModal() {
    const loginModal = await this.modalController.create({
      component: LoginPage,
    });
    return await loginModal.present();
  }
  register() {



    // this.authService.register(form.value.fName, form.value.lName, form.value.email, form.value.password).subscribe(
    //   data => {
    //     this.authService.login(form.value.email, form.value.password).subscribe(
    //       data => {
    //       },
    //       error => {
    //         console.log(error);
    //       },
    //       () => {
    //        this.navCtrl.navigateRoot('/dashboard');
    //       }
    //     );
    //     this.alertService.presentToast(data['message']);
    //   },
    //   error => {
    //     console.log(error);
    //   },
    //   () => {
    //   }
    // );
  }
}