import { Component, OnInit } from '@angular/core';
import { UserService } from '../../auth/shared/services/user.service';

@Component({
  selector: 'mmy-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
