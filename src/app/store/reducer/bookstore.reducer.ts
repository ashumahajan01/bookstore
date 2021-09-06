import { Book } from 'src/app/models/book';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { BookActionTypes, BookActions } from '../action/bookstore.actions';

interface BookState extends EntityState<Book> {
  total: number;
}

export interface State {
  msg: string;
  books: BookState;
}

const adapterBook = createEntityAdapter<Book>();
const bookInitialState: BookState = adapterBook.getInitialState({ total: 0 });

const initialState = {
  msg: 'Book list',
  books: bookInitialState
}

export function reducer(state: State = initialState, action: BookActions): State {
  
  switch (action.type) {
    
    case BookActionTypes.GetBookList:
      return { ...state, books: adapterBook.addMany(action.payload, state.books) };

    default:
      return state;
  }
}

export const selectBookState = (state: State) => state.books;
export const { selectAll: selectAllBooks } = adapterBook.getSelectors();

