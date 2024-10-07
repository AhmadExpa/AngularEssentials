import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // clone the request
    if (request.method === 'POST') {
      const newRequest = request.clone({
        headers: request.headers.append('token', '12345678abcxyz'),
      }); // new HttpHeaders().set('token', '12345678abcxyz');
      console.log('---- > Interceptors Called < ----', newRequest); //  request
      return next.handle(newRequest); // pass the new request to the server
    } else {
      console.log('---- > Interceptors Called < ----', request); //  request
      return next.handle(request); // pass the request to the server
    }
  }
}
