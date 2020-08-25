import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { UserLog } from '../../shared/class/userLog';
import { Router } from '@angular/router';
import { AuthUser } from '../../shared/class/authUser';

@Component({
  selector: 'mmy-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
  }

  logUser(user: UserLog) {
    this.userService.login(user).subscribe(() => {
      this.userService.getMe().subscribe(userLogged => {
        this.userService.currentUser = new AuthUser(userLogged.id, userLogged.username, userLogged.musics);
        this.route.navigateByUrl('/acceuil');
      });
    });
  }
}
