import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/pages/auth/shared/services/user.service';
import { AuthUser } from 'src/app/pages/shared/class/authUser';
import { User } from 'src/app/pages/shared/class/user';
import { Router } from '@angular/router';

@Component({
  selector: 'mmy-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUser: AuthUser;

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.currentUser = this.userService.currentUser;
  }

  logout() {
    localStorage.clear();
    this.route.navigateByUrl('');
  }

}
