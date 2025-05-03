import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'http://localhost:3000/product'
  constructor() { 

  }

  http = inject(HttpClient);

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }

  addProduct(product: Product){
    return this.http.post(this.url, product);
  }
  getProductsById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }
  
  updateProduct(data: Product) {
    return this.http.put(`${this.url}/${data.id}`, data);
  }

  deleteProduct(productId: string){
    return this.http.delete(this.url+"/"+productId)
  }
  
}
