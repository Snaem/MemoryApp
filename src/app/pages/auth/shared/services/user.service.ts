import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/pages/shared/class/user';
import { tap } from 'rxjs/operators';
import { UserLog } from 'src/app/pages/shared/class/userLog';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  path = '/users';

  URL = environment.Url;

  constructor(private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('token');
  }

  login(user: UserLog) {
    return this.http.post(this.URL + '/login', user, { observe: 'response' }).pipe(tap((response) => {
      const token = response.headers.get('Authorization');
      window.localStorage.setItem(token, token);
    }));
  }

  saveUser(user: User) {
    return this.http.post<User>(this.URL + this.path + '/sign-up', user);
  }
}
