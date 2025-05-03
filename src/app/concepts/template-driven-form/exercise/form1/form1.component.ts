import { Component } from '@angular/core';
import { NgForm, NgModel, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.css'
})
export class Form1Component {
  formSubmit(myForm: NgForm) {
    if (myForm.valid) {
      const formValues = JSON.stringify(myForm.value);
      console.log(formValues);
      console.log(
        '%c From submitted successfully',
        'color: green; font-weight: 400; font-size: 15px; background: #e0ffe0; padding: 5px; border-radius: 5px; border: 1px solid #b2ffb2; margin: 5px' 
      );
    } else {
      alert('Please fill up the required fields');
    }
  }
  resetValue(myForm: NgForm) {
    myForm.resetForm();
  }
  setDefault(myForm: NgForm) {
    myForm.resetForm({
      name: 'Default Name',
      email: 'defaultId@gmail.com',
    });
  }
}
