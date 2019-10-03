import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoritesList: any[];

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
    this.getFavoritesList();
  }

  deleteFavorite(fav) {
    this.favoritesService.deleteFavorite(fav);
    this.getFavoritesList();
  }

  getFavoritesList() {
    this.favoritesList = this.favoritesService.getFavorites();
  }

  imageSrc(fav) {
    return `${fav.thumbnail.path}.${fav.thumbnail.extension}`;

  }

}
