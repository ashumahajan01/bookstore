import { Action, createAction } from '@ngrx/store';
import { Book } from 'src/app/models/book';

// export const addBooks = createAction(
//   '[Bookstore] Addbooks Bookstores',
//   (book: Book) => ({book})
// );

export enum BookActionTypes {
  GetBookList = '[Book API] Get Book List'
}

export class GetBookList implements Action {
  public readonly type = BookActionTypes.GetBookList;
  constructor(public payload: Book[]) {}
}

export type BookActions =  
  | GetBookList
