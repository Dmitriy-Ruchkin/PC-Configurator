import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { IProduct, ProductsTypes } from '../products.types';
import { DialogPosition, DialogsService } from 'rl-dialogs';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  @Input() productType!: string

  public Products = ProductsTypes
  public productsNames = Object.values(this.Products)

  public productsList: IProduct[] = []

  constructor(private productsService: ProductsService, private dialogsService: DialogsService) { }

 async ngOnInit(): Promise<void> {
    this.productsList = await this.productsService.getProductsByType(this.productType)
  }

  public showProductDetails(product: IProduct): void {
    void this.dialogsService.show<ProductComponent>(ProductComponent.generateId(), ProductComponent,
      { product, showAddToConfigButton: true }, {
      position: DialogPosition.Right,
      closeOnClickOutside: false,
    })
  }

  public selectThisProduct(product: IProduct): void {
    this.productsService.addSelectedProductToUserConfig(product)
  }

}
