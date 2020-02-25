import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.inteface';

@Component({
  selector: 'ce-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input()
  product: Product

  constructor() { }

  ngOnInit(): void {
  }

}
