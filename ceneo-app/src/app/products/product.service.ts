import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
  private products: Product[] = [
    { category: 'category 1', name: 'Prod 1', description: 'Descr1', id: '1', price: 10.0 },
    { category: 'category 2', name: 'Prod 2', description: 'Descr2', id: '2', price: 2.0 },
    { category: 'category 3', name: 'Prod 3', description: 'Descr3', id: '3', price: 13.0 }
  ]
  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
