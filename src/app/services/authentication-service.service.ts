import { Injectable } from '@angular/core';
import { User } from '../models/user';

const ELEMENT_DATA: User[] = [
  {username: 'Admin123', password: 'admin123', role:'admin'},
  {username: 'User123', password: 'user123', role:'user'}
];

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  map = new Map<string, string>();
  users = ELEMENT_DATA;
  responsecode : number = 401;

  constructor() { 
  }

  login(userLoginInfo: User) { 
    this.users.forEach(user => {
      if(user.username === userLoginInfo.username && user.password === userLoginInfo.password){
        sessionStorage.setItem('CURRENT_USER', userLoginInfo.username);
        sessionStorage.setItem('USER_ROLE', user.role);    
        this.responsecode = 200;   
      }      
    });     
    return this.responsecode;
  }

  isUserLoggedIn(){
    return Boolean(sessionStorage.getItem('USER_LOGGEDIN')) && !!sessionStorage.getItem('CURRENT_USER');
  }
}
