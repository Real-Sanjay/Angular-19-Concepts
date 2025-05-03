import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})
export class Form2Component {

  user: string = '';
  email: string = '';
  selectedCountry: string = '';
  city: string = '';

  countries = [
    { name: 'USA', value: 'usa' },
    { name: 'Australia', value: 'aus' },
    { name: 'UK', value: 'uk' },
  ];

  cities: { [key: string]: string[] } = {
    usa: ['New York', 'Los Angeles', 'Chicago'],
    aus: ['Sydney', 'Melbourne', 'Brisbane'],
    uk: ['London', 'Manchester', 'Birmingham'],
  };

  getCitiesByCountry(country: string): string[] {
    return this.cities[country] || [];
  }

  onSubmit(myForm: NgForm) {
    if (myForm.valid) {
      const formData = {
        user: this.user,
        email: this.email,
        country: this.selectedCountry,
        city: this.city,
      };
      console.log('Form Submitted', formData);
    } else {
      alert('Please fill up the fields');
    }
  }


}
