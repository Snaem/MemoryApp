import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { initApp } from './pages/core/app.initializer';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './pages/auth/auth.module';
import { MainModule } from './pages/main/main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { AppComponent } from './app.component';
import { LoaderComponent } from './pages/shared/component/loader/loader.component';
import { LoaderInterceptor } from './pages/core/loader.interceptor';
import { LoaderService } from './pages/shared/services/loader.service';
import { TokenInterceptor } from './pages/core/token.interceptor';
import { UserService } from './pages/auth/shared/services/user.service';
import { Router } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    MainModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      multi: true,
      deps: [UserService, Router]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
