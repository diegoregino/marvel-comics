import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent implements OnInit {

  @Input() public openModal: boolean;
  @Input() public comic: any;
  @Output() public closeModal = new EventEmitter<boolean>();

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
  }

  closeModalEvent() {
    this.closeModal.emit(false);
  }

  addFavorite(comic) {
    this.favoritesService.addFavorite(comic);
  }

}
