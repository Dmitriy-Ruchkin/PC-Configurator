import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { IProduct } from '../products.types';
import { DialogComponent } from 'rl-dialogs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent extends DialogComponent implements OnInit {

  public data!: IProduct
  public productDescription = []

  constructor(private elementRef: ElementRef, private productsService: ProductsService) {
    super(elementRef)
  }

  ngOnInit(): void {
    this.productDescription = this.data.description.split(',')
  }

  public selectThisProduct(): void {
    this.productsService.addSelectedProductToUserConfig(this.data)
    void this.hide()
  }



}
