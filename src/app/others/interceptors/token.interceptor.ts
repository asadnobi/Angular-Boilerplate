import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Check if the request is going to an API endpoint
    if (request.url.startsWith('https://api.example.com')) {
      // Clone the request and add the token to the headers
      const token = 'your-auth-token';
      const authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      // Pass the cloned request to the next handler
      return next.handle(authReq);
    }
    // If not going to an API endpoint, proceed with the original request
    return next.handle(request);
  }
}
