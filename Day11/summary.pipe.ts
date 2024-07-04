import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string,start:number=0,end:number=20): string {

    // let temp= value.substring(0,25);
    let temp= value.substring(start,end);

    return temp+"...";
  }

}
