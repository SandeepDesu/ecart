import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  { path: '', component: CreateBookComponent }
]

@NgModule({
  declarations: [CreateBookComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class AdminModule { }
