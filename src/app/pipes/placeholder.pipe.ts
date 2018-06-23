import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholder'
})
export class PlaceholderPipe implements PipeTransform {

  transform(value: string, omision: string): string {
    return (value) ? value : omision;
  }

}
