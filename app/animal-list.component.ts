import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector:'animal-list',
  template:`
  <div>
    <ul>
      <li *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.species}}, {{currentAnimal.name}}, {{currentAnimal.age}}, {{currentAnimal.diet}}, {{currentAnimal.location}}, {{currentAnimal.numCaretakers}}, {{currentAnimal.sex}}, {{currentAnimal.likes}}, {{currentAnimal.disLikes}}
      <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
      </li>
    </ul>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
