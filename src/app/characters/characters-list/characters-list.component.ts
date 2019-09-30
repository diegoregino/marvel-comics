import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  getCharacters: Observable<any>;

  constructor(private marvelService: MarvelService) {
    // name=iron%20man&orderBy=name
    // this.marvelService.getMethod('characters', 'name=iron%20man&orderBy=name');
    this.getCharacters = this.marvelService.getMethod('characters', '').pipe(
      map(
        res => {
          console.log(res.results);
          return res.results
        }
      )
    );
  }

  ngOnInit() {
  }

}
