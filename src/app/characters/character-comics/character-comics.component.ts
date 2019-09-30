import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { MarvelService } from 'src/app/services/marvel.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-character-comics',
  templateUrl: './character-comics.component.html',
  styleUrls: ['./character-comics.component.css']
})
export class CharacterComicsComponent implements OnInit {
  getComics: Observable<any>;
  openModal: boolean;
  currentComic: any;

  constructor(private rutaActiva: ActivatedRoute, private marvelService: MarvelService) { }

  ngOnInit() {
    const character = this.rutaActiva.snapshot.params.character;
    this.openModal = false;
    this.getComicsList(character);
  }

  getComicsList(character: string) {
    this.getComics = this.marvelService.getMethod(`characters/${character}/comics`, 'limit=20').pipe(
      map(
        res => {
          return res.results
        }
      )
    );
  }

  openModalDetail(comic) {
    this.currentComic = comic;
    this.openModal = !this.openModal;
  }

  closeModal($event) {
    this.openModal = $event;
  }

}
