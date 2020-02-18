import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { HttpInterceptorService } from '@common/services/http-interceptor.service';
import { HttpWrapperService } from '@common/services/http-wrapper.service';
import { AuthService } from '@common/services/auth.service';
import { BookService } from '@common/services/book.service';
import { UsersService } from '@common/services/users.service';

import { UserAuthGuardGuard } from '@common/guards/user-auth-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    UserModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    HttpWrapperService,
    UserAuthGuardGuard,
    AuthService,
    BookService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
