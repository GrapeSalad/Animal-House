import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {FormsModule}    from '@angular/forms';
import {EditAnimalComponent} from './edit-animal.component';
import {AnimalListComponent} from './animal-list.component';

@NgModule({
  imports: [ BrowserModule, FormsModule],
  declarations: [ AppComponent,
                  EditAnimalComponent,
                  AnimalListComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule{}
