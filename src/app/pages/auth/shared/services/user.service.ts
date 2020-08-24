import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/pages/shared/class/user';
import { AuthUser } from 'src/app/pages/shared/class/authUser';
import { tap } from 'rxjs/operators';
import { UserLog } from 'src/app/pages/shared/class/userLog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: AuthUser;

  path = '/users';

  URL = environment.Url;

  constructor(private http: HttpClient) { }

  setUser(user: AuthUser) {
    this.currentUser = user;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  login(user: UserLog) {
    return this.http.post(this.URL + '/login', user, { observe: 'response' }).pipe(tap((response) => {
      const token = response.headers.get('Authorization');
      window.localStorage.setItem('token', token);
    }));
  }

  getMe(): Observable<AuthUser> {
    return this.http.get<AuthUser>(this.URL + this.path + '/me');
  }

  saveUser(user: User) {
    return this.http.post<User>(this.URL + this.path + '/sign-up', user);
  }
}
