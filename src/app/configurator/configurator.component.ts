import { Component, OnDestroy } from '@angular/core';
import { IProduct, ProductsTypes } from '../products/products.types';
import { ConfiguratorStateTypes, ProductsCategoriesImages } from './configurator.types';
import { ProductsService } from '../products/products.service';
import { Icon, IIconSize } from '../shared/icons/icons.component';
import { globalConstants } from '../core/constants';
import { DialogPosition, DialogsService } from 'rl-dialogs';
import { ProductComponent } from '../products/product/product.component';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss']
})
export class ConfiguratorComponent implements OnDestroy {
  public remainedProductsCategoriesSubscription = this.productService.remainedProductsCategories
    .subscribe(data => {
      this.remainedProductsCategories = data
      if (data.length === 0) {
        this.currentStateSubject$.next(this.configuratorStates.componentSelectionFinished)
      }
    })
  public selectedProductsTypes = this.productService.userSelectedProductsSubject.subscribe(data => {
    this.countTotalPrice(data)
    if (data.find(product => product.type === this.selectedProductType)) {
      this.currentStateSubject$.next(this.configuratorStates.componentSelectorInitialView)
    }
  })
  public remainedProductsCategories = this.productService.remainedProductsCategories.value
  public selectedProducts = this.productService.userSelectedProducts

  public icon = Icon
  public closeIcon: IIconSize = globalConstants.iconSizes.closeIconSize

  public ProductsTypes = ProductsTypes
  public configuratorStates = ConfiguratorStateTypes
  public imagesUrls = ProductsCategoriesImages
  public selectedProductType = ''
  public totalPrice = 0

  private currentStateSubject$: BehaviorSubject<string> = new BehaviorSubject<string>(this.configuratorStates.componentSelectorInitialView)
  // eslint-disable-next-line @typescript-eslint/member-ordering
  public currentState$: Observable<string> = this.currentStateSubject$.asObservable()


  constructor(private productService: ProductsService, private dialogsService: DialogsService) { }

  public openComponentsListWithSelectedCategory(category: string): void {
    this.currentStateSubject$.next(this.configuratorStates.componentSelectionInProgress)
    this.selectedProductType = category
  }

  public removeSelectedProduct(product: IProduct): void {
    this.productService.removeSelectedProductFromConfiguration(product)
  }

  public showProductDetails(product: IProduct): void {
    void this.dialogsService.show<ProductComponent>(ProductComponent.generateId(), ProductComponent,
      { product, showAddToConfigButton: false }, {
      position: DialogPosition.Right,
      closeOnClickOutside: false,
    })
  }

  ngOnDestroy(): void {
    this.remainedProductsCategoriesSubscription.unsubscribe()
    this.selectedProductsTypes.unsubscribe()
  }

  private countTotalPrice(data: IProduct[]): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    data.length ? this.totalPrice = data.map(product => product.price).reduce((sum, price) => sum += price ):
      this.totalPrice = 0
  }

}
