import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '../../base.component';
import { REGEX } from '../../config/contstant';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})

export class UserProfileComponent extends BaseComponent implements OnInit {
  form: FormGroup;
  passwordForm: FormGroup;
  showError = false;
  showPasswordError = false;

  constructor(
    public formBuilder: FormBuilder
  ) {
    super();
  }

  ngOnInit(): void {
    this.createProfileForm();
    this.form.reset();
    this.showError = false;
  }

  createProfileForm(): void {
    this.form = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required, Validators.pattern(new RegExp(REGEX.alphaSpace))]),
      phone1: new FormControl('', Validators.pattern(new RegExp(REGEX.phone))),
      email1: new FormControl('', [Validators.required, Validators.email]),
      description: new FormControl('')
    });
  }

  saveUser(): void {
  }
}
