import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { ShareDataService } from 'src/app/services/share-data.service';
import { LocationStrategy } from '@angular/common';


@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  book : Book;

  constructor(private router: Router, private shareService: ShareDataService, private location: LocationStrategy) {

    history.pushState(null, 'null', window.location.href);  
    this.location.onPopState(() => {
      history.pushState(null, 'null', window.location.href);
    }); 
    
   }

  ngOnInit(): void {
    this.book = this.shareService.data;
  }
  
  gotoBooks(){
    this.router.navigate(['/books']);
  }

}
