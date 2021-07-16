import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pcConfiguratorCurrencyPipe'
})
export class pcConfiguratorCurrencyPipe implements PipeTransform {
  transform(value: number): string {

    return value.toString() +' ₽'
  }
}
