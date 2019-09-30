import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-comics',
  templateUrl: './favorite-comics.component.html',
  styleUrls: ['./favorite-comics.component.css']
})
export class FavoriteComicsComponent implements OnInit {
  favoritesList: any[];

  constructor() { }

  ngOnInit() {
  }

}
