import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationServiceService } from '../services/authentication-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationServiceService, private router: Router) { }

  canActivate() {
    if (this.authenticationService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }  
}
