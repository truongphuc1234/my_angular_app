import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthState } from '../../models';
import { loginAction } from '../../store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;
  showPassword: boolean = false;
  showRePassword: boolean = false;

  constructor(private formBuilder: FormBuilder, private store: Store<AuthState>) { }

  ngOnInit(): void {
    this.buildForm();
  }

  submit(): void {
    this.store.dispatch(loginAction(this.formGroup.value));
  }

  private buildForm(): void {
    this.formGroup = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(24)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(24)]],
    });
  }
}
