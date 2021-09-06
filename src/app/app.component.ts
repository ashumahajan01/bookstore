import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookstore';

   // Keep me Signed in
  public doUnload(): void {
    this.doBeforeUnload();
  }

// Keep me Signed in
  public doBeforeUnload(): void {
    localStorage.clear();
    sessionStorage.clear();
  }
}
