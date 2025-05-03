import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reactive-form-stepper',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form-stepper.component.html',
  styleUrl: './reactive-form-stepper.component.css',
})
export class ReactiveFormStepperComponent {
  step: number = 1;
  formElements: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formElements = this.fb.group({
      userDetails: this.fb.group({
        fName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
      }),
      additionalDetails: this.fb.group({
        phoneNo: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
          ],
        ],
        address: ['', [Validators.required]],
        country: ['', [Validators.required]],
        gender: ['', [Validators.required]],
      }),
      feedbackComment: this.fb.group({
        comments: ['']
      })
    });
  }
  btnPrevious() {
    if (this.step > 1) {
      this.step--;
    }
  }

  btnNext() {
    if (this.step < 3) {
      this.step++;
    }
  }

  isCurrentStepValid(): boolean {
    switch (this.step) {
      case 1:
        return this.formElements.get('userDetails')?.valid ?? false;
      case 2:
        return this.formElements.get('additionalDetails')?.valid ?? false;
      case 3:
        return this.formElements.get('feedbackComment')?.valid ?? false;
      default:
        return false;
    }
  }

  onSubmit(){
    if(this.formElements.valid){
      console.log(this.formElements.value);
      alert('Form submitted successfully!');
    }
  }
}
