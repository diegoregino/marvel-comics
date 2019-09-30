import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { FavoriteComicsComponent } from './favorite-comics/favorite-comics.component';
import { SortByComponent } from './sort-by/sort-by.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { CharacterComicsComponent } from './character-comics/character-comics.component';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';

@NgModule({
  declarations: [ CharactersListComponent, FavoriteComicsComponent, SortByComponent, FavoritesComponent, PaginatorComponent, CharacterComicsComponent, ComicDetailComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
