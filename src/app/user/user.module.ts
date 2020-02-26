import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { CartService } from './services/cart.service';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { UserAuthGuard } from '@common/guards/user-auth.guard';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [UserAuthGuard],
    children: [
      { path: '', component: BookListComponent },
    ]
  }
]

@NgModule({
  declarations: [DashboardComponent, HeaderComponent, BookListComponent, BookDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [CartService]
})
export class UserModule { }
