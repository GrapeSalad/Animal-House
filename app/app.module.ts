import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {FormsModule}    from '@angular/forms';
import {EditAnimalComponent} from './edit-animal.component';
import {AnimalListComponent} from './animal-list.component';
import {AddAnimalComponent} from './add-animal.component';
import { SelectorPipe } from './selector.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule],
  declarations: [ AppComponent,
                  EditAnimalComponent,
                  AddAnimalComponent,
                  AnimalListComponent,
                  SelectorPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule{}
