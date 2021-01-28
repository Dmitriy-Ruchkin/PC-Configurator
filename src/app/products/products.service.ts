import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct, IVideoCard, ProductsTypes } from './products.types';
import { BehaviorSubject, Observable } from 'rxjs';

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

  public getProducts(type? : string): Promise<any[]> {
    return new Promise(resolve => {
      const parts = {
        VideoCard: [{
          type: 'VideoCard',
          name: 'nvidia geforce gtx 710',
          id: 'gfdgdfger3231gfd',
          price: 3700,
          imageUrl: 'https://avatars.mds.yandex.net/get-mpic/96484/img_id1498376725040247497/orig',
          description: 'size: 90x60x90'
        },
          {
            type: 'VideoCard',
            name: 'nvidia geforce gtx 510i',
            id: 'gfdgdtrer3231gfd',
            price: 3700,
            imageUrl: 'https://avatars.mds.yandex.net/get-mpic/96484/img_id1498376725040247497/orig',
            description: 'size: 90x60x90, price: 3700'
          }],
        Case: [{
          type: 'Case',
          name: 'Deshman',
          id: 'gfdgdtret6871gfd',
          price: 3700,
          imageUrl: 'https://avatars.mds.yandex.net/get-mpic/96484/img_id1498376725040247497/orig',
          description: 'size: 90x60x90, price: 3700'
        },
          {
            type: 'Case',
            name: 'neDeshman',
            id: 'gfdgdtrer5231gfd',
            price: 3700,
            imageUrl: 'https://avatars.mds.yandex.net/get-mpic/96484/img_id1498376725040247497/orig',
            description: 'size: 90x60x90, price: 3700'
          }]
      }
      if(type){
        console.log(type,parts[type])
        setTimeout(()=> {
          resolve(parts[type])
        },200)
      } else {
        setTimeout(()=> {
          resolve(Object.values(parts))
        },200)
      }
    })
  }

  private removeSelectedCategory(): void {
    const data = this.productTypesNames.filter(category => !this.userSelectedProductsSubject.value
      .map(product => product.type).includes(category))
    this.remainedProductsCategories.next(data)
    console.log(this.remainedProductsCategories.value)
  }
}
