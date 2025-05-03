import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SortNumbers',
  standalone: true
})
export class CustomPipePipe implements PipeTransform {

  transform(value: number[], sortOrder: 'asc' | 'desc'): number[] {
    if(sortOrder === 'asc'){
      return value.sort((a,b)=> a-b);
    } else if(sortOrder === 'desc'){
      return value.sort((a,b)=> b-a);
    }
    return value;
  }

}
