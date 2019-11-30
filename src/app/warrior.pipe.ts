import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'warrior'
})
export class WarriorPipe implements PipeTransform {

  transform(values: any[], args?:any): any {
    return values.filter((player) => player.guild == "warrior");
  }

}
