import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/pages/shared/class/user';
import { UserLog } from 'src/app/pages/shared/class/userLog';

@Component({
  selector: 'mmy-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  userForm = this.fb.group({
    username: [''],
    password: ['']
  });

  @Output() logUser: EventEmitter<UserLog> = new EventEmitter();

  userLog: UserLog;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userLog = new UserLog(this.userForm.value.username, this.userForm.value.password);

    this.logUser.emit(this.userLog);
  }

}
