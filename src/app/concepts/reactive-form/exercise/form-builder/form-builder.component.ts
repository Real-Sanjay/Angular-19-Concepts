import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormArray, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css'
})
export class FormBuilderComponent {

  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.employeeForm = this.fb.group({
      employees: this.fb.array([
    ])  
  })
}

get  employees() : FormArray{
  return this.employeeForm.get('employees') as FormArray;
}

addEmployee(){
   const employee = this.fb.group({
    name: ['', Validators.required],
    job: ['', Validators.required]
   })
   this.employees.push(employee);
}

submitForm(){
  if(this.employeeForm.valid){
    console.log(this.employeeForm.value);
  }else{
    console.log('Form is invalid');
  }
}

}


