import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FiltersService } from 'src/app/services/filters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  getCharacters: Observable<any>;
  private filterState: any;

  constructor(private marvelService: MarvelService, private filterService: FiltersService) {}

  ngOnInit() {
    this.filterService.filterState$.subscribe(
      res => {
        this.filterState = res;
        this.getCharacterList();
      }
    );
  }

  getCharacterList() {
    const params = this.filterToString();
    this.getCharacters = this.marvelService.getMethod('characters', params).pipe(
      map(
        res => {
          return res.results
        }
      )
    );
  }

  filterToString() {
    const {name, orderBy, offset, limit} = this.filterState;
    const nameValidate = name === '' ? '' : `name=${name}`;
    const params = `limit=${limit}&${nameValidate}&orderBy=${orderBy}&offset=${offset}`;
    return params;
  }

}
