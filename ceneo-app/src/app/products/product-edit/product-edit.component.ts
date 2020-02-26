import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.inteface';

@Component({
  selector: 'ce-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  product$: Observable<Product>

  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService) {
    this.product$ = productService.getById(route.snapshot.params.id)
  }

  ngOnInit(): void {
  }

  handleSave(product: Product) {
    this.productService.updateProduct({ ...product, id: this.route.snapshot.params.id }).subscribe(() => {
      this.router.navigateByUrl('/products')
    })
  }

}
