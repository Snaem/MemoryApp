import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { UserLog } from '../../shared/class/userLog';
import { Router } from '@angular/router';

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
    this.userService.login(user).subscribe(() => { this.route.navigateByUrl('/dashboard'); });
  }

}
