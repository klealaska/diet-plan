import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string = '';
  private loggedIn = false;
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
    const token = localStorage.getItem('access_token');
    if (token) {
      this.token = token;
      this.loggedIn = !this.jwtHelper.isTokenExpired(token);
    }
  }

  login(credentials: any) {
    return this.http.post(`${this.apiUrl}/login`, credentials, httpOptions)
      .toPromise()
      .then((res: any) => {
        const token = res['access_token'];
        localStorage.setItem('access_token', token);
        this.token = token;
        this.loggedIn = true;
      });
  }

  logout() {
    localStorage.removeItem('access_token');
    this.token = '';
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  getToken() {
    return this.token;
  }
}
