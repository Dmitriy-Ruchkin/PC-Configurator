import { Component, OnDestroy } from '@angular/core';
import { IProduct, ProductsTypes } from '../products/products.types';
import { ConfiguratorTypesImages } from './configurator.types';
import { ProductsService } from '../products/products.service';
import {Icon, IIconSize} from '../shared/icons/icons.component';
import {globalConstants} from '../core/constants';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss']
})
export class ConfiguratorComponent implements OnDestroy {
  public remainedProductsCategoriesSubscription = this.productService.remainedProductsCategories
    .subscribe(data => this.remainedProductsCategories = data)
  public remainedProductsCategories = this.productService.remainedProductsCategories.value
  public selectedProductsTypes = this.productService.userSelectedProductsSubject.subscribe(data => {
    this.countTotalPrice(data)
    if (data.find(product => product.type === this.selectedProductType)) {
      this.componentsListViewModel = false
    }
  })
  public selectedProducts = this.productService.userSelectedProducts

  public icon = Icon
  public closeIcon: IIconSize = globalConstants.iconSizes.closeIconSize

  public ProductsTypes = ProductsTypes
  public imagesUrls = ConfiguratorTypesImages
  public componentsListViewModel = false
  public selectedProductType = ''
  public totalPrice = 0


  constructor(private productService: ProductsService) { }

  public openComponentsListWithSelectedCategory(category: string): void {
    this.componentsListViewModel = true
    this.selectedProductType = category
  }

  public removeSelectedProduct(product: IProduct): void {
    this.productService.removeSelectedProductFromConfiguration(product)
  }

  ngOnDestroy(): void {
    this.remainedProductsCategoriesSubscription.unsubscribe()
  }

  private countTotalPrice(data: IProduct[]): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    data.length ? this.totalPrice = data.map(product => product.price).reduce((sum, price) => sum += price ):
      this.totalPrice = 0
  }

}
