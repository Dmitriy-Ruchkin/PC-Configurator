import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IProduct} from './products.type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Promise<IProduct[]> {
    return new Promise(resolve => {
      setTimeout(()=> {
        resolve([
          {
            title: 'Cosy sofa',
            description: 'this is very cosy sofa',
            // eslint-disable-next-line
            image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c29mYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
            price: 14999,
            id: 'hrvy1999919'
          },
          {
            title: 'Cosy sofa',
            description: 'this is very cosy sofa',
            // eslint-disable-next-line
            image: 'data:image/jpeg;base64,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',
            price: 14999,
            id: 'hrvy1999920'
          },
          {
            title: 'Cosy sofa',
            description: 'this is very cosy sofa',
            // eslint-disable-next-line
            image: 'https://ii1.pepperfry.com/media/catalog/product/b/l/568x284/blos-3-seater-sofa-in-eerie-black-colour-by-durian-blos-3-seater-sofa-in-eerie-black-colour-by-duria-v9iz41.jpg',
            price: 14999,
            id: 'hrvy1999921'
          },
          {
            title: 'Cosy sofa',
            description: 'this is very cosy sofa',
            // eslint-disable-next-line
            image: 'https://ii1.pepperfry.com/media/catalog/product/b/l/568x284/blos-3-seater-sofa-in-eerie-black-colour-by-durian-blos-3-seater-sofa-in-eerie-black-colour-by-duria-v9iz41.jpg',
            price: 14999,
            id: 'hrvy1999922'
          },
          {
            title: 'Cosy sofa',
            description: 'this is very cosy sofa',
            // eslint-disable-next-line
            image: 'https://ii1.pepperfry.com/media/catalog/product/b/l/568x284/blos-3-seater-sofa-in-eerie-black-colour-by-durian-blos-3-seater-sofa-in-eerie-black-colour-by-duria-v9iz41.jpg',
            price: 14999,
            id: 'hrvy1999923'
          },
          {
            title: 'Cosy sofa',
            description: 'this is very cosy sofa',
            // eslint-disable-next-line
            image: 'https://ii1.pepperfry.com/media/catalog/product/b/l/568x284/blos-3-seater-sofa-in-eerie-black-colour-by-durian-blos-3-seater-sofa-in-eerie-black-colour-by-duria-v9iz41.jpg',
            price: 14999,
            id: 'hrvy1999924'
          }
        ])
      },200)
    })
  }
}
