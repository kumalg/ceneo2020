import { Injectable } from '@angular/core';
import { Product } from '../models/product.inteface';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class ProductService {

  private productList: Product[] = [
    { id: '1', name: 'OnePlus 7 Pro', description: 'smartfon', price: 2229, category: 'smartfony' },
    { id: '2', name: 'Samsung Galaxy S10', description: 'smartfon', price: 3229, category: 'smartfony' },
    { id: '3', name: 'Xiaomi Air Purifier 3H', description: 'oczyszczacz powietrza', price: 549, category: 'urządzenia domowe' }
  ]

  private productsSubj =  new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubj.asObservable();

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    this.httpClient.get<Product[]>(apiUrl + '/products').subscribe(prods => {
      this.productsSubj.next(prods);
    });
  }

  updateProduct(product: Product) {
    return this.httpClient.put(apiUrl + '/products/' + product.id, product)
  }

  getById(id: string): Observable<Product> {
    return this.httpClient.get<Product>(apiUrl + '/products/' + id)
  }

}
