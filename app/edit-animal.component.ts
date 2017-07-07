import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal} from './animal.model';

@Component ({
  selector: 'edit-animal',
  template: `
    <div *ngIf="childSelectedAnimal">
      <p>{{childSelectedAnimal.species}}</p>
      <p>{{childSelectedAnimal.name}}</p>
      <p>{{childSelectedAnimal.age}}</p>
      <p>{{childSelectedAnimal.diet}}</p>
      <p>{{childSelectedAnimal.location}}</p>
      <p>{{childSelectedAnimal.numCaretakers}}</p>
      <p>{{childSelectedAnimal.sex}}</p>
      <p>{{childSelectedAnimal.likes}}</p>
      <p>{{childSelectedAnimal.disLikes}}</p>
      <h3>Edit Animal</h3>
      <label>Change Animal Species</label>
      <input [(ngModel)]="childSelectedAnimal.species">
      <label>Change Animal Name</label>
      <input [(ngModel)]="childSelectedAnimal.name">
      <label>Change Animal Age</label>
      <input type="number" [(ngModel)]="childSelectedAnimal.age">
      <select [(ngModel)]="childSelectedAnimal.diet">
        <option> Carnivore </option>
        <option> Herbivore </option>
        <option> Omnivore </option>
      </select>
      <label>Change Animal Location</label>
      <input [(ngModel)]="childSelectedAnimal.location">
      <label>Change Animal Number of Caretakers</label>
      <input type="number" [(ngModel)]="childSelectedAnimal.numCaretakers">
      <select [(ngModel)]="childSelectedAnimal.sex">
        <option> Male </option>
        <option> Female </option>
        <option> Not prescribing to Gender Norms </option>
      </select>
      <label>Change Animal Likes</label>
      <input [(ngModel)]="childSelectedAnimal.likes">
      <label>Change Animal Dislikes</label>
      <input [(ngModel)]="childSelectedAnimal.disLikes">
      <button (click)="buttonFinishedEditing()">Done</button>
      <hr>
    </div>
  `
})

export class EditAnimalComponent{
  @Input() childSelectedAnimal: Animal;
  @Output() finishedEditingSender = new EventEmitter();

  buttonFinishedEditing(){
    this.finishedEditingSender.emit();
  }
}
