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

  getCharacters: any;
  private filterState: any;
  loading: boolean;
  openFavsToggle: boolean;

  constructor(private marvelService: MarvelService, private filterService: FiltersService) {
    this.loading = true;
  }

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
    this.marvelService.getMethod('characters', params).pipe(
      map(res => res.results)
    ).subscribe(
      res => {
        this.loading = res ? false : true;
        res.forEach((el, index) => {
          if (el.comics.items.length > 3) {
            const related = [];
            for (let i = 0; i < el.comics.items.length; i++) {
              related[i] = el.comics.items[i];
              if(i > 1) break;
            }
            res[index].comics.items = related
          }
        });
        console.log('rela', res)
        this.getCharacters = res;
      }
    );
  }

  filterToString() {
    const {name, orderBy, offset, limit} = this.filterState;
    const nameValidate = name === '' ? '' : `name=${name}`;
    const params = `limit=${limit}&${nameValidate}&orderBy=${orderBy}&offset=${offset}`;
    return params;
  }

  openFavs() {
    this.openFavsToggle = !this.openFavsToggle;
  }

}
