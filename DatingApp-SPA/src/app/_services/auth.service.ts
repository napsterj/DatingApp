import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators/';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';
  jwtHelperService = new JwtHelperService();
  decodedToken: any;

  constructor(private service: HttpClient) {}

  login(model) {
    return this.service.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelperService.decodeToken(user.token);
          console.log(this.decodedToken);
        }
      })
    );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelperService.isTokenExpired(token);
  }
  registerUser(model) {
    return this.service.post(this.baseUrl + 'register', model);
  }
}
