import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  model: any = {};
  constructor(private service: AuthService, private alertify: AlertifyService) {}

  login() {
    this.service.login(this.model).subscribe(
      next => {
        this.alertify.success('Logged in successfully.');
        this.model = {};
      },
      error => {
        this.alertify.error('Failed to login');
      }
    );
  }

  loggedIn() {
    return this.service.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logged out.');
  }
}
