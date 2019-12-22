import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  model: any = {};
  constructor(private service: AuthService) {}

  login() {
    this.service.login(this.model).subscribe(
      next => {
        console.log('Logged in successfully.');
      },
      error => {
        console.log('Failed to login');
      }
    );
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    console.log('Logged out.');
  }
}
