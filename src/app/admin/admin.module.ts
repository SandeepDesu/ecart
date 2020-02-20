import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateBookComponent } from './components/create-book/create-book.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { BookFormComponent } from './common/book-form/book-form.component';
import { ListComponent } from './components/list/list.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'create', component: CreateBookComponent },
      { path: 'edit/:id', component: EditBookComponent },
      { path: 'list', component: ListComponent },
      { path: '', redirectTo: '/admin/list' }
    ]
  }
]

@NgModule({
  declarations: [CreateBookComponent, DashboardComponent, HeaderComponent, BookFormComponent, ListComponent, EditBookComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class AdminModule { }
