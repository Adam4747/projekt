import { Routes } from '@angular/router';
import { Todo } from './todo/todo';
import { CharacterComponent } from './todo/character/character';
import { PlanetsComponent } from './todo/planets/planets';
import { VehiclesComponent } from './todo/vehicles/vehicles';
import { SpeciesComponent } from './todo/species/species';
import { SpaceshipsComponent } from './todo/spaceships/spaceships';

export const routes: Routes = [
  { path: '', component: Todo },
  { path: 'character/:id', component: CharacterComponent },
  { path: 'planets/:id', component: PlanetsComponent },
  { path: 'vehicles/:id', component: VehiclesComponent },
  { path: 'species/:id', component: SpeciesComponent },
  { path: 'spaceships/:id', component: SpaceshipsComponent },
];
