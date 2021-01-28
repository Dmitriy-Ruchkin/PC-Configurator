import { Component, OnDestroy, OnInit } from '@angular/core';
import {IProduct, ProductsTypes} from '../products/products.types';
import { ConfiguratorTypesImages } from './configurator.types';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss']
})
export class ConfiguratorComponent implements OnInit, OnDestroy {
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

  public ProductsTypes = ProductsTypes
  public imagesUrls = ConfiguratorTypesImages
  public componentsListViewModel = false
  public selectedProductType = ''
  public totalPrice = 0


  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }

  public openComponentsListWithSelectedCategory(category: string): void {
    this.componentsListViewModel = true
    this.selectedProductType = category
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
