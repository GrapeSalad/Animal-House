import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector:'keg-list',
  template:`
  <div>
    <ul>
      <li *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.species}}</li>
    </ul>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
}
