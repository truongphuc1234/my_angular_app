import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent implements OnInit {
  formGroup!: FormGroup;
  showPassword: boolean = false;
  showRePassword: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  submit(): void {
    console.log(this.formGroup);
  }

  private buildForm(): void {
    this.formGroup = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(24)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(24)]],
      passwordConfirm: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      emailConfirm: ['', [Validators.required]],
      isAgree: [null, [Validators.required]],
    });
  }

}
