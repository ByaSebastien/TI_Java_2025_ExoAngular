import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number): string {
    let minutes = Math.floor(value / 60).toString().padStart(2, '0');
    let seconds = (value % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

}
