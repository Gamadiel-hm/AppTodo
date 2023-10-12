import { Pipe, PipeTransform } from '@angular/core';
import { SortTitle } from 'src/app/core/enums/enumSort';
import { ObjectSortTitles, TodoList } from 'src/app/core/models/todo';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(
    value: TodoList[],
    objectSort: ObjectSortTitles,
    titleSort: SortTitle
  ): TodoList[] {
    if (
      titleSort !== SortTitle.default &&
      objectSort.afterTitle !== objectSort.beforeTitle
    )
      return value.sort((a, b) => {
        return a[titleSort].localeCompare(b[titleSort]);
      });
    else if (objectSort.afterTitle === objectSort.beforeTitle)
      return value.reverse();
    else return value;
  }
}
