import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-validator',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-validator.component.html',
  styleUrl: './form-validator.component.css'
})
export class FormValidatorComponent {
myForm: FormGroup;
nameControl: FormControl;
emailControl: FormControl;

constructor(){
  
  this.emailControl = new FormControl('', [Validators.required, Validators.email])
  this.myForm =  new FormGroup({
     name: this.nameControl = new FormControl('',Validators.required),
     email: this.emailControl,
  })
  console.log(this.nameControl);
  console.log(this.emailControl);

}

formSubmit(){
  if(this.myForm.valid){
    console.log(this.myForm.value);
  }
}
}
