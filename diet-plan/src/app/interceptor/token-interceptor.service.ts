import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    // Check if the request is authorized and if there is a token
    if (token && request.url.endsWith('/authorized')) {
      // Clone the request and set the Authorization header
      const authorizedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      // Pass the authorized request to the next handler
      return next.handle(authorizedRequest);
    }

    // Pass the original request to the next handler
    return next.handle(request);
  }
}