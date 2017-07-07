import {Component} from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>{{currentFocus}}</h1>
    <hr>
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <edit-animal [childSelectedAnimal]="masterSelectedAnimal" (finishedEditingSender)="finishedEditing()"></edit-animal>

  </div>
  `
})


export class AppComponent {
  currentFocus: string = "Welcome to the Animal House!"
  masterAnimalList: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool Shade', 'Loud noises'),
    new Animal('Ocelot', 'Baboo', 5, 'Carnivore', 'Tunt Manor', 2, 'Male', 'Attacking Mr. Archer', 'Mr. Archer'),
    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'Female', 'Delicate roots and leaves', 'Loud noises')
  ]

  masterSelectedAnimal: Animal = null;

  editAnimal(clickedAnimal){
    console.log(clickedAnimal);
    this.masterSelectedAnimal = clickedAnimal;
  }

  finishedEditing(){
    this.masterSelectedAnimal = null;
  }
}
