import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { UserLog } from '../../shared/class/userLog';
import { Router } from '@angular/router';
import { AuthUser } from '../../shared/class/authUser';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'mmy-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private route: Router, private matSnack: MatSnackBar) { }

  ngOnInit(): void {
  }

  logUser(user: UserLog) {
    this.userService.login(user).subscribe(() => {
      this.userService.getMe().subscribe(userLogged => {
        this.userService.currentUser = new AuthUser(userLogged.id, userLogged.username, userLogged.musics);
        this.route.navigateByUrl('/acceuil');
      });
    }, (error) => {
      this.matSnack.open('⚠ Le pseudo ou le mot de passe n\'est pas bon, veuillez réessayer', null, {
        duration: 5000,
      });
    });
  }
}
