import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xAmountOfCharacters'
})
export class XAmountOfCharactersPipe implements PipeTransform {

  transform(value: string, limit: number) {
    return value.substring(0, limit);
  }

}
