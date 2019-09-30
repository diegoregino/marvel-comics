import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor() { }

  addFavorite() {
    console.log('add method');

  }

  getFavorites(comic) {
    console.log('get favs method', comic);

  }
}
