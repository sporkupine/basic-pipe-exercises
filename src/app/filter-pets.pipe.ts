import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPets'
})
export class FilterPetsPipe implements PipeTransform {
  transform(petThoughts: string[], filterResults: string): string[] {
    if (!petThoughts) {
      return [];
    }
    if (!filterResults) {
      return petThoughts;
    }
    return petThoughts.filter( thought => {
      return thought.toLocaleLowerCase().includes(filterResults);
    })
  }




}

