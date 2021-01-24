import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IProduct} from '../products/products.type';
import {ProductService} from '../products/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private productsSubject$: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([])
  // eslint-disable-next-line
  public products$: Observable<IProduct[]> = this.productsSubject$.asObservable()

  constructor(private productService: ProductService) { }

  async ngOnInit(): Promise<void> {
    await this.getProducts()
  }

  public async getProducts(): Promise<void> {
    const productsPack = await this.productService.getProducts()
    this.productsSubject$.next(productsPack)
  }

}
