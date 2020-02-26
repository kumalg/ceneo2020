import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/models/product.inteface';
import { Observable } from 'rxjs';

@Component({
  selector: 'ce-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList$: Observable<Product[]>

  constructor(private productService: ProductService) {
    this.productList$ = this.productService.products$
    this.productService.getProducts()
  }

  ngOnInit(): void {
  }

}
