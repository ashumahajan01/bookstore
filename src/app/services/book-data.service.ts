import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetBookList } from '../store/action/bookstore.actions';
import { BOOKS_DATA } from 'src/app/interface/bookinterface';
import { AppState } from '../store/selector/bookstore.selectors';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private store: Store<AppState>) {     
  }

  addBook(): void {
    this.store.dispatch(new GetBookList(BOOKS_DATA));    
  }
}
