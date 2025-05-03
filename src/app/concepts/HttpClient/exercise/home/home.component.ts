import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
product: Product[] = []
constructor(private productService: ProductService){
}
ngOnInit(): void {
    this.getProducts();
}

getProducts(){
  this.productService.getProducts().subscribe((data)=>{
     this.product  = data;
    console.log("products called", data);
  })
}

deleteProduct(id:string){
  this.productService.deleteProduct(id).subscribe((data)=> console.log("data deleted successfully", data))
  this.product = this.product.filter((val)=> val.id !== id);
  this.getProducts()  
  console.log("products also called", this.product)
}

}
