import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductAddComponent,
    ProductFormComponent,
    ProductEditComponent
  ],
  providers: [
    { provide: ProductService, useClass: ProductService },
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
