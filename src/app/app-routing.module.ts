import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserAuthGuard } from '@common/guards/user-auth.guard';
import { AdminAuthGuard } from '@common/guards/admin-auth.guard';
const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'user', loadChildren: './user/user.module#UserModule',
    canActivate: [UserAuthGuard]
  },
  {
    path: 'admin', loadChildren: './admin/admin.module#AdminModule',
    canActivate: [AdminAuthGuard]
  },
  {
    path: '**', redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
