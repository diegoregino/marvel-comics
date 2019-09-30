import { Component, OnInit } from '@angular/core';
import { FiltersService } from 'src/app/services/filters.service';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.css']
})
export class SortByComponent implements OnInit {
  private filterState: any;

  constructor(private filterService: FiltersService) {
  }

  ngOnInit() {
    this.filterService.filterState$.subscribe(
      res => {
        this.filterState = res;
      }
    );
  }

  changeFilterState($event) {
    const selectValue = $event.target.value;
    this.filterState.orderBy = selectValue;
    this.filterService.changeFilterState(this.filterState);
  }

}
