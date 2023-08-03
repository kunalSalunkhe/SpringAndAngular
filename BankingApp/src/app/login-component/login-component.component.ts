import { Component } from '@angular/core';
import { AuthService } from '../AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    // Perform login logic her
    this.authService.login();

    // Redirect the user to the appropriate page based on their role
    // if (this.authService.isAdmin()) {
    //   this.router.navigate(['/dashboard']);
    // } else {
    //   this.router.navigate(['/home']);
    // }
  }
}

