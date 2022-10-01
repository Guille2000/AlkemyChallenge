import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'siono'
})
export class SionoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value ? 'Si' : 'No';

  }

}