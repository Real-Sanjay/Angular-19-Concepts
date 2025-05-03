import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-age-validator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './age-validator.component.html',
  styleUrl: './age-validator.component.css'
})
export class AgeValidatorComponent {
  age: number = 0;
  isEligible: boolean = false;

  checkEligibility() {
    this.isEligible = this.age >= 18;
  }
}
