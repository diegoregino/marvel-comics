import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  private filterState: BehaviorSubject<object>;
  private filterInitialState = {
    name: '',
    orderBy:'name',
    offset: 0
  }
  filterState$: Observable<object>;

  constructor() {
    this.filterState = new BehaviorSubject<object>(this.filterInitialState);
    this.filterState$ = this.filterState.asObservable();
  }

  changeFilterState(mensaje) {
    this.filterState.next(mensaje);
  }
}
