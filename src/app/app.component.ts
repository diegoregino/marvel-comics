import { Component } from '@angular/core';
import { MarvelService } from './services/marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marvel-comics';
  constructor(private marvelService: MarvelService) {
    this.marvelService.getMethod('characters', 'name=iron%20man&orderBy=name');
  }
}
