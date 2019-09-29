import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { FavoriteComicsComponent } from './favorite-comics/favorite-comics.component';
import { SortByComponent } from './sort-by/sort-by.component';


@NgModule({
  declarations: [CharactersListComponent, FavoriteComicsComponent, SortByComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
