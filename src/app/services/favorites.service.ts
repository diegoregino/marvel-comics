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
      this.addToLocalStorage(addFavorites);
    }
  }

  getFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favs'));
    return favorites;
  }

  deleteFavorite(comic) {
    const favorites = this.getFavorites();
    const favoritesIdx = favorites.map(fav => fav.id).indexOf(comic.id);
    const newFav = favorites.splice(favoritesIdx, 1);
    this.addToLocalStorage(favorites);
  }

  myComicIsFav(comic) {
    // idComic: number = 40630
    const favorites = this.getFavorites();
    return this.favoriteIs(favorites, comic);
  }

  private addToLocalStorage(list) {
    localStorage.setItem('favs', JSON.stringify(list));
  }

  private favoriteIs(favoritesList, comic) {
    const favsIs = favoritesList.filter(fav => fav.id === comic.id);
    return favsIs.length > 0;
  }
}
