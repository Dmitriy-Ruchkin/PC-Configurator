import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct, ProductsTypes } from './products.types';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productTypesNames = Object.keys(ProductsTypes)

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public userSelectedProductsSubject: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([])
  // eslint-disable-next-line @typescript-eslint/member-ordering
  public userSelectedProducts: Observable<IProduct[]> = this.userSelectedProductsSubject.asObservable()
  // eslint-disable-next-line @typescript-eslint/member-ordering
  public remainedProductsCategories: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.productTypesNames)

  constructor(private http: HttpClient) { }

  public addSelectedProductToUserConfig(product: IProduct): void {
    const data = this.userSelectedProductsSubject.value
    data.push(product)
    this.userSelectedProductsSubject.next(data)
    this.removeSelectedCategory()
  }

  public getProducts(): Promise<IProduct[]> {
    const url = `${environment.serverUri}/components`
    return this.http.get<IProduct[]>(url).toPromise()
  }

  public getProductsByType(type: string): Promise<IProduct[]> {
    const url = `${environment.serverUri}/components/${type}`
    return this.http.get<IProduct[]>(url).toPromise()
  }

  private removeSelectedCategory(): void {
    const data = this.productTypesNames.filter(category => !this.userSelectedProductsSubject.value
      .map(product => product.type).includes(category))
    this.remainedProductsCategories.next(data)
  }
}
