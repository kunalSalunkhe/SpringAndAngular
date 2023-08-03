import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private isAdmin = false;
  private isUSer:boolean = false;

  constructor() {}

  login(): void {
    // Perform login logic here
    // Set the authentication status to true
    this.isAuthenticated = true;
    this.isAdmin = true;
    this.isUSer = false;

  }

  logout(): void {
    // Perform logout logic here
    // Set the authentication status to false
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  isAdminIn(): boolean {
    return this.isAdmin;
  }

  isUserIn(): boolean {
    return this.isUSer;
  }
}
