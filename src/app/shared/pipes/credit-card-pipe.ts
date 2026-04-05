import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard',
})
export class CreditCardPipe implements PipeTransform {

  transform(value: string): string {
    const clean = value.replace(/\D/g, '').slice(0, 16);
    const masked = '**** **** **** ' + clean.slice(-4);
    return clean.length >= 4 ? masked : clean;
  }

}
