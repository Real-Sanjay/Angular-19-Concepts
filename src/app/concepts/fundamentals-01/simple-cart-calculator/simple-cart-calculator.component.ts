import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-simple-cart-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './simple-cart-calculator.component.html',
  styleUrl: './simple-cart-calculator.component.css'
})
export class SimpleCartCalculatorComponent {
  quantity: number = 1;
  pricePerItem: number = 100;

  get totalPrice(): number {
    return this.quantity * this.pricePerItem;
  }
}
