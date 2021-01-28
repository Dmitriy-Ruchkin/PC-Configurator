import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../products/products.types';
import { ProductsService } from '../products/products.service';
import { HomeStateTypes } from './home-state.types';
import { ProductsTypes } from '../products/products.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public HomePageStateTypes = HomeStateTypes
  public Parts = ProductsTypes
  public partsNames = Object.values(this.Parts)

  private productsSubject$: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([])
  // eslint-disable-next-line
  public products$: Observable<IProduct[]> = this.productsSubject$.asObservable()
  private currentStateSubject$: BehaviorSubject<HomeStateTypes> = new BehaviorSubject<HomeStateTypes>(HomeStateTypes.initialView)
  // eslint-disable-next-line
  public currentState$: Observable<HomeStateTypes> = this.currentStateSubject$.asObservable()

  constructor(private productService: ProductsService) { }

  async ngOnInit(): Promise<void> {
    await this.getProducts()
  }

  public changeState(state: HomeStateTypes): void {
    this.currentStateSubject$.next(state)
  }

  public async getProducts(): Promise<void> {
    const productsPack = await this.productService.getProducts()
    this.productsSubject$.next(productsPack)
  }

}
