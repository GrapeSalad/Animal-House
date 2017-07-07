import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal} from './animal.model';

@Component ({
  selector: 'add-animal',
  template: `
    <div id="animalImages" [style.class]="hideWhenClicked()">
      <div class="row">
        <h3 class="text-center">Click an Animal to add it to the Zoo!</h3>
      </div>
      <div class="row">
        <div class="col-md-4">
          <img (click)="animalImageSelected('cow')" src="./resources/images/cow.gif" alt="Have a Cow!">
        </div>
        <div class="col-md-4">
          <img (click)="animalImageSelected('bear')" src="./resources/images/bearWave.gif" alt="What a bear!">
        </div>
        <div class="col-md-4">
          <img (click)="animalImageSelected('gorilla')" src="./resources/images/gorilla.gif" alt="Silverback Strut!">
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <img (click)="animalImageSelected('goat-horse')" src="./resources/images/goatHorse.gif" alt="Kid on tde Horse range!">
        </div>
        <div class="col-md-4">
          <img (click)="animalImageSelected('cheetah')" src="./resources/images/cheetah.gif" alt="Fast Cheetah!">
        </div>
        <div class="col-md-4">
          <img (click)="animalImageSelected('platypus')" src="./resources/images/platypus.gif" alt="Platypus Tickles!">
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <img (click)="animalImageSelected('aye-aye')" src="./resources/images/ayeAye.gif" alt="Aye, creepy; Aye, cute!">
        </div>
        <div class="col-md-4">
          <img (click)="animalImageSelected('red-panda')" src="./resources/images/redPanda.gif" alt="Red panda uses intimidate!">
        </div>
        <div class="col-md-4">
          <img (click)="animalImageSelected('panda')" src="./resources/images/pandas.gif" alt="Panda Slide!">
        </div>
      </div>
    </div>
    <div *ngIf="addAnimal">
    <div id="selectedAnimal"></div>
      <h1 class="text-center">Tell us more about this animal!</h1>
      <table class="addTable">
        <tr>
          <th>Species</th>
          <th>Name</th>
          <th>Age</th>
          <th>Diet</th>
          <th>Location</th>
        </tr>
        <tr>
          <td><input #newSpecies></td>
          <td><input #newName></td>
          <td><input type="number" #newAge></td>
          <td><select #newDiet>
            <option> Carnivore </option>
            <option> Herbivore </option>
            <option> Omnivore </option>
          </select></td>
          <td><input #newLocation></td>
        </tr>
        <tr>
          <th>Caretakers</th>
          <th>Sex</th>
          <th>Likes</th>
          <th>Dislikes</th>
          <td rowspan="2"><button class="addButton" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newNumCaretakers.value, newSex.value, newLikes.value, newDislikes.value);">Add</button></td>
        </tr>
        <tr>
          <td><input type="number" #newNumCaretakers></td>
          <td><select #newSex>
            <option> Male </option>
            <option> Female </option>
            <option> Not prescribing to Gender Norms </option>
          </select></td>
          <td><input #newLikes></td>
          <td><input #newDislikes></td>
        </tr>
      </table>
      <hr>
    </div>
  `
})

export class AddAnimalComponent {
  @Output() addAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, numCaretakers: number, sex: string, likes: string, disLikes: string) {
    if(species === "" || name === "" || age === null || diet === "" || location === "" || numCaretakers === null || sex === "" || likes === "" || disLikes === ""){
      alert("Please fill out everything!");
    }
    else{
      var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, numCaretakers, sex, likes, disLikes);
      this.addAnimalSender.emit(newAnimalToAdd);
      this.addAnimal = false;
    }
  }
  addAnimal: boolean = false;
  hidden: boolean = true;

  hideWhenClicked(){
    if (this.hidden === false)
    {
      return "hideMe";
    }
    else{
      return "showMe";
    }
  }

  getClickedAnimal(animal: string){
    console.log("clicked " + animal);
    return animal;
  }

  animalImageSelected(animalName: string){
    this.addAnimal = true;
    this.hideWhenClicked();
    this.getClickedAnimal(animalName);
  }
}
