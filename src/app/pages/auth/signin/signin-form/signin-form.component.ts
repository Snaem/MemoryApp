import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/pages/shared/class/user';

@Component({
  selector: 'mmy-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit {

  userForm = this.fb.group({
    firstname: [''],
    lastname: [''],
    email: [''],
    username: [''],
    password: ['']
  });

  user: User;

  @Output() saveUser: EventEmitter<User> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.user = new User(
      this.userForm.value.username,
      this.userForm.value.password,
      this.userForm.value.firstname,
      this.userForm.value.lastname,
      this.userForm.value.email);

    this.saveUser.emit(this.user);
  }

}
