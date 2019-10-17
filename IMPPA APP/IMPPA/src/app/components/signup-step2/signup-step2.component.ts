import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'signup-step2',
  templateUrl: './signup-step2.component.html',
  styleUrls: ['./signup-step2.component.scss'],
})
export class SignupStep2Component implements OnInit {
  public step2: FormGroup;

  constructor(private formBuilder: FormBuilder)
  {
    this.step2 = this.formBuilder.group({
      email: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      password: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    });
  }

  ngOnInit() {}

}
