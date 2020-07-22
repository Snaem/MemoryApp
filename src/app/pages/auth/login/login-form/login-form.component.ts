import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/pages/shared/class/user';

@Component({
  selector: 'mmy-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  userForm = this.fb.group({
    login: [''],
    password: ['']
  });

  user: User;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
  }

}
