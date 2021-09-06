import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
       { path: '', redirectTo: 'books', pathMatch: 'prefix' },
       { path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule)},
       { path: 'bookdetails', component: BookdetailsComponent}
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
