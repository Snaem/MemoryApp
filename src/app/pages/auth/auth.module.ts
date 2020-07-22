import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { SigninComponent } from './signin/signin.component';
import { SigninFormComponent } from './signin/signin-form/signin-form.component';



@NgModule({
  declarations: [LoginComponent, LoginFormComponent, SigninComponent, SigninFormComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
