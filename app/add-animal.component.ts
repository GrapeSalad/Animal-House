import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Animal} from './animal.model';

@Component ({
  selector: 'add-animal',
  template: `
    <div id="animalImages" class="hideWhenClicked()">
      <table>
        <tr>
          <th class="text-center" colspan="3">Click An Animal to add it to the zoo!</th>
        </tr>
        <tr>
          <td><img (click)="animalImageSelected('cow')" src="./resources/images/cow.gif" alt="Have a Cow!"></td>
          <td><img (click)="animalImageSelected('bear')" src="./resources/images/bearWave.gif" alt="What a bear!"></td>
          <td><img (click)="animalImageSelected('gorilla')" src="./resources/images/gorilla.gif" alt="Silverback Strut!"></td>
        </tr>
        <tr>
          <td><img (click)="animalImageSelected('goat-horse')" src="./resources/images/goatHorse.gif" alt="Kid on tde Horse range!"></td>
          <td><img (click)="animalImageSelected('cheetah')" src="./resources/images/cheetah.gif" alt="Fast Cheetah!"></td>
          <td><img (click)="animalImageSelected('platypus')" src="./resources/images/platypus.gif" alt="Platypus Tickles!"></td>
        </tr>
        <tr>
          <td><img (click)="animalImageSelected('aye-aye')" src="./resources/images/ayeAye.gif" alt="Aye, creepy; Aye, cute!"></td>
          <td><img (click)="animalImageSelected('red-panda')" src="./resources/images/redPanda.gif" alt="Red panda uses intimidate!"></td>
          <td><img (click)="animalImageSelected('panda')" src="./resources/images/pandas.gif" alt="Panda Slide!"></td>
        </tr>
      </table>
    </div>
    <div *ngIf="addAnimal">
      <div class="getClickedAnimal(name)">Stuff</div>
      <h1>Tell us more about this animal!</h1>
      <div>
        <label>Species</label>
        <input #newSpecies>
        <label>Name</label>
        <input #newName>
        <label>Age</label>
        <input type="number" #newAge>
        <select #newDiet>
          <option> Carnivore </option>
          <option> Herbivore </option>
          <option> Omnivore </option>
        </select>
        <label>Location</label>
        <input #newLocation>
        <label>Number of Caretakers</label>
        <input type="number" #newNumCaretakers>
        <select #newSex>
          <option> Male </option>
          <option> Female </option>
          <option> Not prescribing to Gender Norms </option>
        </select>
        <label>Likes</label>
        <input #newLikes>
        <label>Dislikes</label>
        <input #newDislikes>
      </div>
      <div>
        <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newNumCaretakers.value, newSex.value, newLikes.value, newDislikes.value);">Add</button>
      </div>
      <hr>
    </div>
  `
})

export class AddAnimalComponent {
  @Output() addAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, numCaretakers: number, sex: string, likes: string, disLikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, numCaretakers, sex, likes, disLikes);
    this.addAnimalSender.emit(newAnimalToAdd);
  }
  addAnimal: boolean = false;
  hidden: boolean = false;

  hideWhenClicked(){
    if (this.hidden === false)
    {
      console.log(this.hidden + " value of hidden in true statment")
      this.hidden = true;
      this.addAnimal = true;
      return "hideMe";
    }
    else{
      console.log(this.hidden + " value of hidden in false statment")
      this.hidden = false;
      this.addAnimal = false;
      return "showMe";
    }
  }

  getClickedAnimal(animal: string){
    return animal;
  }

  animalImageSelected(animalName: string){
    console.log("clicked " + animalName);
    // this.addAnimal = true;
    this.hideWhenClicked();
    this.getClickedAnimal(animalName);
  }
}
