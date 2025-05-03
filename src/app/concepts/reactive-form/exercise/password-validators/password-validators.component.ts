import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-password-validators',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './password-validators.component.html',
  styleUrl: './password-validators.component.css'
})
export class PasswordValidatorsComponent {
  myForm: FormGroup;
  passwordFieldType: string = 'password';
  passwordToggleIcon: string = 'bi bi-eye-slash';

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[A-Z])(?=.*[@$!*&])(?=\S+$).*$/),
        ],
      ],
    });
  }

  formSubmit() {
    if (this.myForm.valid) {
      console.log('Form Submitted');
    }
  }

  togglePasswordVisibility() {
    if (this.passwordFieldType === 'password') {
      this.passwordFieldType = 'text';
      this.passwordToggleIcon = 'bi bi-eye-fill';
    } else {
      this.passwordFieldType = 'password';
      this.passwordToggleIcon = 'bi bi-eye-slash';
    }
  }

}
