import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateprocessor'
})
export class PreprocessorPipe implements PipeTransform {

  transform(datetime: string) {
    let arr = datetime.split('T');
    return arr[0]
  }

}