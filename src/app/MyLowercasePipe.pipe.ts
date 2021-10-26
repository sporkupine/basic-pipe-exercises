import { Pipe, PipeTransform } from "@angular/core";


@Pipe({name: 'myLowercasePipe'})

export class myLowercasePipe implements PipeTransform {
  transform(value) {
    return value.toLocaleLowerCase();
  }
}
