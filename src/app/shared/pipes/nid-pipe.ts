import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nid',
})
export class NidPipe implements PipeTransform {

  transform(value: string): string {
    const clean = value.replace(/\D/g, '').slice(0, 14);
    if (clean.length <= 1) return clean;
    if (clean.length <= 7) return clean.slice(0, 1) + '-' + clean.slice(1);
    return clean.slice(0, 1) + '-' + clean.slice(1, 7) + '-' + clean.slice(7);
  }

}
