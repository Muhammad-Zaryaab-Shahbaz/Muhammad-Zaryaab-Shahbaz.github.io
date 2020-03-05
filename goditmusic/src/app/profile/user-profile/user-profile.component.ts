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
  showError         = false;
  showPasswordError = false;

  constructor(
    public formBuilder: FormBuilder
  ) {
    super();
  }

  ngOnInit(): void {
    this.createProfileForm();
    this.createPasswordForm();
    this.form.reset();
    this.showError = false;
  }

  createProfileForm(): void {
    this.form = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required, Validators.pattern(new RegExp(REGEX.alphaSpace))]),
      middleName: new FormControl(''),
      lastName: new FormControl('', [Validators.required, Validators.pattern(new RegExp(REGEX.alphaSpace))]),
      city: new FormControl('', [Validators.pattern(new RegExp(REGEX.alphaSpace))]),
      province: new FormControl('BC', [Validators.pattern(new RegExp(REGEX.alphaSpace))]),
      postalCode: new FormControl('', [Validators.pattern(new RegExp(REGEX.postalCode))]),
      address: new FormControl(''),
      homeBase: new FormControl(''),
      phone1: new FormControl('', Validators.pattern(new RegExp(REGEX.phone))),
      phone2: new FormControl('', Validators.pattern(new RegExp(REGEX.phone))),
      phone3: new FormControl('', Validators.pattern(new RegExp(REGEX.phone))),
      email1: new FormControl('', [Validators.required, Validators.email]),
      email2: new FormControl('', Validators.email),
      password: new FormControl('')
    });
  }

  saveUser(): void {
  }

  changePassword(): void {
  }

  private createPasswordForm(): void {
    this.passwordForm = this.formBuilder.group({
      oldPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required]),
      confirmNewPassword: new FormControl('')
    });

    this.passwordForm.get('confirmNewPassword')
      .setValidators([Validators.required]);

    this.passwordForm.get('newPassword').valueChanges
      .subscribe(
        () => this.passwordForm.get('confirmNewPassword')
          .updateValueAndValidity()
      );
  }
}
