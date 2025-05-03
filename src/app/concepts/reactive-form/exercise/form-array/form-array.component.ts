import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.css'
})
export class FormArrayComponent {
  employeeForm: FormGroup;

  constructor() {
    this.employeeForm = new FormGroup({
      employees: new FormArray([]),
    });
  }

  get employees(): FormArray {
    console.log("inside employee formGrouo", this.employeeForm.get('employees') as FormArray)
    return this.employeeForm.get('employees') as FormArray;
  }

  addEmployee(): void {
    const employeeGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      job: new FormControl('', Validators.required),
    });
    this.employees.push(employeeGroup);
  }

  submitForm() {
    if (this.employeeForm.invalid) {
      return;
    } else {
      console.log(this.employeeForm.value);
    }
  }



}
