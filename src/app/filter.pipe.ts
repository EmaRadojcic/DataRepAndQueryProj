import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(items: any[], searchText: string): any[] {
    //if nothing then array is empty
    if (!items) return [];
    //if nothign in search text then display everthing 
    if (!searchText) return items;
    //changes all text to clowecase
    searchText = searchText.toLowerCase();
    return items.filter(player => {
      //filter player names where the name includes whats int the search text
      return player.name.toLowerCase().includes(searchText);
    });
  }
}
