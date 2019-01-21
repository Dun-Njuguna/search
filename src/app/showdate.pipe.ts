import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showdate'
})
export class ShowdatePipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); //get current date and time
    let todayWithNoTime:any = new Date(today.getDate());

        return todayWithNoTime;
    }
  }
