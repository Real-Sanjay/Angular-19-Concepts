import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { nameValidator, urlValidator } from '../Validators/nameValidator';
@Component({
  selector: 'app-custom-validators',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './custom-validators.component.html',
  styleUrl: './custom-validators.component.css'
})
export class CustomValidatorsComponent {
nameForm: FormGroup;

constructor(private fb: FormBuilder) {
  this.nameForm = this.fb.group({
    name: ['', [Validators.required, nameValidator]],
    url: ['', [Validators.required, urlValidator]],
})
}

}
