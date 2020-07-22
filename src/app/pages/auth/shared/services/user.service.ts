import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/pages/shared/class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  path = 'users';

  URL = environment.Url;

  constructor(private http: HttpClient) { }

  saveUser(user: User) {
    return this.http.post<User>(this.URL + this.path, user);
  }
}
