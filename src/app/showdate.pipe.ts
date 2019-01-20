import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showdate'
})
export class ShowdatePipe implements PipeTransform {

  transform(value: any): number {
    
  }

}
