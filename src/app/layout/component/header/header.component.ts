import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginUser : any;

  constructor( public router: Router) {        
  }

  ngOnInit() {
    this.loginUser = sessionStorage.getItem('CURRENT_USER');
  }

  onLoggedout() {
    localStorage.clear();
    sessionStorage.clear();
  }
}
