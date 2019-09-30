import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor() { }

  addFavorite(comic) {
    const favorites = this.getFavorites() || [];
    const favsIs = this.favoriteIs(favorites, comic);
    if (!favsIs) {
      const addFavorites = favorites.concat(comic);
      localStorage.setItem('favs', JSON.stringify(addFavorites));
    }
  }

  getFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favs'));
    return favorites;
  }

  private favoriteIs(favoritesList, comic) {
    const favsIs = favoritesList.filter(fav => fav.id === comic.id);
    return favsIs.length > 0;
  }
}
