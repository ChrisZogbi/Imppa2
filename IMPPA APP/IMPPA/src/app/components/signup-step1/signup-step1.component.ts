import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'signup-step1',
  templateUrl: './signup-step1.component.html',
  styleUrls: ['./signup-step1.component.scss'],
})
export class SignupStep1Component implements OnInit {

  public step1: FormGroup;

  constructor(private formBuilder: FormBuilder ) {}

  ngOnInit(){
    this.step1 = this.formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    });
  }
}
