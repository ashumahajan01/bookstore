import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  imports: [
      CommonModule,
      BooksRoutingModule,
      MatTableModule,
      MatCardModule   
  ],
  declarations: [
    BooksComponent
  ],
  exports:[
    MatTableModule,
    MatCardModule 
  ]
})
export class BooksModule { }
