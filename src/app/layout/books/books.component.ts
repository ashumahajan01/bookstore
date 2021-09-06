import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { AppState, selectAllBooks } from 'src/app/store/selector/bookstore.selectors';
import { BOOKS_DATA } from 'src/app/interface/bookinterface';
import { ShareDataService } from 'src/app/services/share-data.service';
import { LocationStrategy } from '@angular/common';
 
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  displayedColumns: string[] = ['isbn', 'title', 'subtitle', 'author'];
  bookList$ : Observable<Book[]>;
  datasource : Book[] = BOOKS_DATA;
  userRole : string | null;

  constructor(private router: Router, private store: Store<AppState>, private shareService: ShareDataService, private location: LocationStrategy) { 
    //this.bookList$ = store.pipe(select(selectAllBooks));

    history.pushState(null, 'null', window.location.href);  
    this.location.onPopState(() => {
      history.pushState(null, 'null', window.location.href);
    }); 
    
  }

  ngOnInit(): void { 
    this.userRole = sessionStorage.getItem('USER_ROLE');
  }

  setBookDetails(book : Book){
    this.shareService.data = book;
  }

  isAdmin(){
    return this.userRole === 'admin';
  }

}
