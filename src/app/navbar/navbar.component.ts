import { Component, OnInit } from '@angular/core';
import { FiltersService } from 'src/app/services/filters.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private filterState: any;
  searchInput: string;

  constructor(private filterService: FiltersService) {
    this.searchInput = '';
  }

  ngOnInit() {
    this.filterService.filterState$.subscribe(
      res => {
        console.log(res);
        this.filterState = res;
      }
    )
  }

  changeFilterState() {
    this.filterState.name = this.searchInput.replace(/ /g, '%20');
    this.filterService.changeFilterState(this.filterState);
  }

}
