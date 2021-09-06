import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBook from '../reducer/bookstore.reducer';

export interface AppState {
  book: fromBook.State;
}

// export const reducers: ActionReducerMap<AppState> = {  
//   book: fromBook.reducer
// };

export const selectBookModule = createFeatureSelector<fromBook.State>('book');
export const selectBookState = createSelector(selectBookModule, fromBook.selectBookState);
export const selectAllBooks = createSelector(selectBookState, fromBook.selectAllBooks);



