import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector:'animal-list',
  template:`
    <div>
      <h2 class="text-center">What we have now:</h2>
      <div class="text-center">
        <p>Sort/View</p>
        <select (change)="onChange($event.target.value)">
          <option value="All">All Animals</option>
          <option value="Young">Young</option>
          <option value="Mature">Mature</option>
        </select>
      </div>
      <p class="text-center">Click anywhere to edit:</p>
      <table>
        <tr>
          <th>Species</th>
          <th>Name</th>
          <th>Age</th>
          <th>Diet</th>
          <th>Location</th>
          <th>Caretakers</th>
          <th>Sex</th>
          <th>Likes</th>
          <th>Dislikes</th>
        </tr>
        <tr (click)="editButtonHasBeenClicked(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | selector: filterBySelector">
          <td>{{currentAnimal.species}}</td>
          <td>{{currentAnimal.name}}</td>
          <td>{{currentAnimal.age}}</td>
          <td>{{currentAnimal.diet}}</td>
          <td>{{currentAnimal.location}}</td>
          <td>{{currentAnimal.numCaretakers}}</td>
          <td>{{currentAnimal.sex}}</td>
          <td>{{currentAnimal.likes}}</td>
          <td>{{currentAnimal.disLikes}}</td>
        </tr>
      </table>
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
