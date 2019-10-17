import { SignupStep1Component } from './signup-step1/signup-step1.component';
import { SignupStep2Component } from './signup-step2/signup-step2.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgModule,  } from '@angular/core';
import {CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@NgModule({
    declarations: [SignupStep2Component, SignupStep1Component],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        IonicModule
    ],
    providers: [SignupStep2Component, SignupStep1Component],
    exports: [SignupStep2Component, SignupStep1Component]
})
export class ComponentModule { }