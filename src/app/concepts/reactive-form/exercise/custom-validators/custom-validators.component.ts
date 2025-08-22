import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
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

nameControl : FormControl;
urlControl : FormControl;
constructor(private fb: FormBuilder) {
  this.nameControl = new FormControl('', [Validators.required, nameValidator]);
  this.urlControl = new FormControl('', [Validators.required, urlValidator]);
   console.log("name:", this.nameControl);
  console.log("url:", this.urlControl);
  
  this.nameForm = this.fb.group({
    name: this.nameControl,
    url: this.urlControl
  })
  // this.consoleIt();
}
consoleIt() {
  console.log("name:", this.nameControl);
  console.log("url:", this.urlControl);
}
}