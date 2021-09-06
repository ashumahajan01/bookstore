import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthenticationServiceService } from '../services/authentication-service.service';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  loginError: string;
  isLoading: boolean = false;
  submitted: boolean = false;
  isLoginError: boolean = false;

  constructor( private formBuilder: FormBuilder, private router: Router, 
    private authenticationService: AuthenticationServiceService, 
    private location: LocationStrategy) { 

      history.pushState(null, 'null', window.location.href);  
      this.location.onPopState(() => {
        history.pushState(null, 'null', window.location.href);
      });  

    }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  userLogin() {
    this.submitted = true;
    this.isLoginError = false;
    const isValid = this.loginForm.invalid;      

    if (this.loginForm.invalid) {
        return;
    }

    if (isValid || (this.loginForm.controls.password.value == null) || this.loginForm.controls.username.value == null) {
          this.loginForm.setErrors({
            invalidData : true
          });      
    } else {
      const userinfo: User = Object.assign({}, this.loginForm.value);
      userinfo.password = this.loginForm.controls.password.value;
      userinfo.username = this.loginForm.controls.username.value;

      if(this.authenticationService.login(userinfo) === 200){
        this.loginError = "";
        this.isLoginError = false;
        sessionStorage.setItem('USER_LOGGEDIN', 'true');
        this.router.navigate(['/books']); 
      } else {
        sessionStorage.clear();
        this.loginError = "Username or Password is incorrect!";
        this.isLoginError = true;
        return;
      }
    }    
  }
}
