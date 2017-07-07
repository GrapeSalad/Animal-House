import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "selector",
  pure: false
})

export class SelectorPipe implements PipeTransform{
  transform(input: Animal[], desiredSelector) {
    var output: Animal[] = [];
    if(desiredSelector === "Young"){
      for(var i=0; i<input.length; i++){
        if(input[i].age < 2){
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(desiredSelector === "Mature"){
      for(var i=0; i<input.length; i++){
        if(input[i].age >= 2){
          output.push(input[i]);
        }
      }
      return output;
    }
    else{
      return input;
    }
  }

}
