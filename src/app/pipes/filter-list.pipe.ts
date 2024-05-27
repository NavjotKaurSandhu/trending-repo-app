import { Pipe, PipeTransform } from '@angular/core';
import { IRepositories } from '../interface/repositories.interface';

@Pipe({
  name: 'filterList',
  standalone: true,
})
export class FilterListPipe implements PipeTransform {
  transform(value: IRepositories[], type: string): IRepositories[] {
    if (!type) {
      return value;
    }

    const filterType = type === 'unknown' ? null : type.toLowerCase();

    return value?.filter((item: IRepositories) => {
      const val = item.language ? item.language.toLowerCase() : null
      return val === filterType;
    });
  }
}
