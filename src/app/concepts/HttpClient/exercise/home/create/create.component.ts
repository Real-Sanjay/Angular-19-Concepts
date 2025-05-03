import { Component } from '@angular/core';
import { Product } from '../../product';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  newProductForm: Product = {
    id: '',
    name: '',
    price: 0,
  };
  newProductId: string = '';

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      // Find the maximum ID
      const maxId = Math.max(
        ...products.map((product) => Number(product.id)),
        100
      ); // Using 100 as the fallback to avoid NaN
      // Increment the maximum ID for the new product
      const newId = maxId + 1;
      // Assign the ID directly
      this.newProductForm.id = newId.toString();
    });
  }

  createProduct() {
    this.productService.addProduct(this.newProductForm).subscribe({
      next: () => {
        this.router.navigate(['/products']);
      },
      error: (e) => {
        console.error(e);
      },
    });
  }
}
