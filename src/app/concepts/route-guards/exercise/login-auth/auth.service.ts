import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private readonly IS_LOGGED_IN_KEY = 'isLoggedIn';


constructor() {
  // Ensure localStorage has a default value on service initialization
  if (localStorage.getItem(this.IS_LOGGED_IN_KEY) === null) {
    localStorage.setItem(this.IS_LOGGED_IN_KEY, 'false');
  }
}

login(email: string, password: string): boolean {
  if (email && password) {
    localStorage.setItem(this.IS_LOGGED_IN_KEY, 'true');
    console.log('Login successful, isLoggedIn:', this.isLoggedInUser());
    return true;
  }
  console.log('Login failed');
  return false;
}

isLoggedInUser(): boolean {
  const isLoggedIn = localStorage.getItem(this.IS_LOGGED_IN_KEY) === 'true';
  console.log('isLoggedInUser called, isLoggedIn:', isLoggedIn);
  return isLoggedIn;
}

//   route = inject(Router);
// isLoggedIn: boolean = false;

// login(email: string, password: string): boolean{
//   if(email !== '' && password !== ''){
//     this.isLoggedIn = true;
//     return true;
//   } else {
//     return false;
// }

// }

// checkLogin(): boolean {
//   return this.isLoggedIn;
// }

}
