import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterComicsComponent } from './character-comics/character-comics.component';


const routes: Routes = [
  {
    path: '',
    component: CharactersListComponent
  },
  {
    path: 'comics/:character',
    component: CharacterComicsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
