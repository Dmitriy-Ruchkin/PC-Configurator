import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { IProduct } from '../products.types';
import { DialogComponent } from 'rl-dialogs';
import { ProductsService } from '../products.service';
import { Icon, IIconSize } from '../../shared/icons/icons.component';
import { globalConstants } from '../../core/constants';

export interface IProductOpening {
  product: IProduct
  showAddToConfigButton: boolean
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent extends DialogComponent implements OnInit {

  public icon = Icon
  public closeIcon: IIconSize = globalConstants.iconSizes.closeIconSize

  public data!: IProductOpening
  public productDescription = []

  constructor(private elementRef: ElementRef, private productsService: ProductsService) {
    super(elementRef)
  }

  ngOnInit(): void {
    this.productDescription = this.data.product.description.split(',')
  }

  public selectProduct(): void {
    this.productsService.addSelectedProductToUserConfig(this.data.product)
    void this.hide()
  }

  public removeProduct(): void {
    this.productsService.removeSelectedProductFromConfiguration(this.data.product)
    void this.hide()
  }



}
