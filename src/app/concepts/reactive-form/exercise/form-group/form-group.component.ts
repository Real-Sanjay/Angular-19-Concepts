import { Component } from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormControlName, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.css'
})
export class FormGroupComponent {

empDetails: FormGroup;

constructor(){
  this.empDetails = new FormGroup({
    empName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    empNo: new FormControl('')
  })
}

onSubmit(){
  if(this.empDetails.valid){
    console.log(this.empDetails.value);
    alert('Form Submitted Successfully!');
  }
}


}
