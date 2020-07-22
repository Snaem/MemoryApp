import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { SigninComponent } from './signin/signin.component';
import { SigninFormComponent } from './signin/signin-form/signin-form.component';



@NgModule({
  declarations: [AuthComponent, LoginComponent, LoginFormComponent, SigninComponent, SigninFormComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule
  ]
})
export class AuthModule { }
