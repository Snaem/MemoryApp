import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../auth/shared/services/user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('token')) {
      const userToken = this.userService.getToken();
      const modifiedReq = req.clone({
        headers: new HttpHeaders({ Authorization: userToken })
      });

      console.log('Intercepted HTTP call', modifiedReq);
      return next.handle(modifiedReq);
    } else {
      return next.handle(req);
    }
  }
}
