import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent implements OnInit {

  @Input() public openModal: boolean;
  @Input() public comic: any;
  @Output() public closeModal = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  closeModalEvent() {
    this.closeModal.emit(false);
  }

}
