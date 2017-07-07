import {Component} from '@angular/core';
import {Animal} from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="jumbotron">
        <h1>{{currentFocus}}</h1>
        <h3>{{description}}</h3>
      </div>
      <hr>
      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>

      <edit-animal [childSelectedAnimal]="masterSelectedAnimal" (finishedEditingSender)="finishedEditing()"></edit-animal>

      <add-animal (addAnimalSender)="addAnimal($event)"></add-animal>
    </div>
  `
})


export class AppComponent {
  currentFocus: string = "Welcome to the Animal House!"
  description: string = "Tell us what animals you want to see!"
  masterAnimalList: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool Shade', 'Loud noises'),
    new Animal('Ocelot', 'Babu', 5, 'Carnivore', 'Tunt Manor', 2, 'Male', 'Attacking Mr. Archer', 'Mr. Archer'),
    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'Female', 'Delicate roots and leaves', 'Loud noises')
  ]

  masterSelectedAnimal: Animal = null;

  editAnimal(clickedAnimal){
    this.masterSelectedAnimal = clickedAnimal;
  }

  finishedEditing(){
    this.masterSelectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
