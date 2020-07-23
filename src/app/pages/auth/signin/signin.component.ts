import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../../shared/class/user';

@Component({
  selector: 'mmy-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  emailSend = false;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  saveUser(user: User) {
    console.log(user);

    this.userService.saveUser(user).subscribe();
    this.emailSend = true;
  }


}
