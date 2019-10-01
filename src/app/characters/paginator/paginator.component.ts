import { Component, OnInit } from '@angular/core';
import { FiltersService } from 'src/app/services/filters.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  private filterState: any;
  private newOffset: number;

  constructor(private filterService: FiltersService) {
    this.newOffset = 0;
  }

  ngOnInit() {
    this.filterService.filterState$.subscribe(
      res => {
        this.filterState = res;
      }
    );
  }

  changeOffset(offset: number) {

    if (offset === -1 && this.newOffset < 0) {
      this.newOffset -= 10;
    } else if (offset === 1) {
      this.newOffset += 10;
    } else {
      this.newOffset = offset;
    }
    this.filterState.offset = this.newOffset;
    this.filterService.changeFilterState(this.filterState);
  }

  currentOffset(offset: number, equal: string) {
    return (equal === 'equal') ? this.newOffset === offset : this.newOffset > offset;
  }

  getCurrentOffset() {
    return this.newOffset;
  }

}
