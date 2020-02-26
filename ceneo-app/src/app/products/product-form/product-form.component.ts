import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.inteface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const categories = [ 'electronic', 'food', 'other' ]

@Component({
  selector: 'ce-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input() product: Product
  @Output() saveProduct = new EventEmitter<Product>()
  productForm: FormGroup
  categories = categories

  constructor() {
    this.productForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl(0, [Validators.min(1)]),
      category: new FormControl('', Validators.required),
      isActive: new FormControl(false),
    // }, {
    //   updateOn: 'submit'
    })
  }

  ngOnInit(): void {
    this.productForm.patchValue(this.product) // pod warunkiem ze model ma zgodne nazwy
  }

  handleSubmit() {
    if (this.productForm.valid) {
      this.saveProduct.emit(this.productForm.value)
    }
  }

}
