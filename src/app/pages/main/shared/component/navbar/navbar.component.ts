import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { UserService } from 'src/app/pages/auth/shared/services/user.service';
import { AuthUser } from 'src/app/pages/shared/class/authUser';
import { Router } from '@angular/router';

@Component({
  selector: 'mmy-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUser: AuthUser;

  open = false;

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.currentUser = this.userService.currentUser;
  }

  logout() {
    localStorage.clear();
    this.route.navigateByUrl('');
  }

  openMenu() {
    this.open = !this.open;
    if (!this.open) {
      document.getElementById('navbar').className = 'close';
    } else {
      document.getElementById('navbar').className = 'open';
    }
  }

}
