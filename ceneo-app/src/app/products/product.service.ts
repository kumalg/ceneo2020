import { Injectable } from '@angular/core';
import { Product } from '../models/product.inteface';

@Injectable()
export class ProductService {

  private productList: Product[] = [
    {
      id: '1',
      name: 'OnePlus 7 Pro',
      description: 'smartfon',
      price: 2229,
      category: 'smartfony'
    },
    {
      id: '2',
      name: 'Samsung Galaxy S10',
      description: 'smartfon',
      price: 3229,
      category: 'smartfony'
    },
    {
      id: '3',
      name: 'Xiaomi Air Purifier 3H',
      description: 'oczyszczacz powietrza',
      price: 549,
      category: 'urządzenia domowe'
    }
  ]

  constructor() { }

  getProducts(): Product[] {
    return this.productList
  }

}
