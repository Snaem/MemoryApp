import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { UserLog } from '../../shared/class/userLog';

@Component({
  selector: 'mmy-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  logUser(user: UserLog) {
    console.log(user);

    this.userService.login(user).subscribe((response) => {
      console.log(response);
    });
  }

}
