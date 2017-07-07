import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector:'animal-list',
  template:`
    <div>
      <h2>What we have now:</h2>
      <p>Sort/View</p>
      <select (change)="onChange($event.target.value)">
        <option value="All">All Animals</option>
        <option value="Young">Young</option>
        <option value="Mature">Mature</option>
      </select>
      <p>Click anywhere to edit:</p>
      <ul>
        <li (click)="editButtonHasBeenClicked(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | selector: filterBySelector">{{currentAnimal.species}}, {{currentAnimal.name}}, {{currentAnimal.age}}, {{currentAnimal.diet}}, {{currentAnimal.location}}, {{currentAnimal.numCaretakers}}, {{currentAnimal.sex}}, {{currentAnimal.likes}}, {{currentAnimal.disLikes}}
        </li>
      </ul>
    </div>
    <hr>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterBySelector: string = "All";

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterBySelector = optionFromMenu;
  }
}
