import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '@common/services/book.service';
import { Book } from '@common/models/book';
@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  @Input() book: Book;
  bookForm: FormGroup;
  authors: FormArray;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      name: ['', Validators.required],
      cost: ['', Validators.required],
      currencyIn: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      author: this.formBuilder.array([])
    });
    this.authors = this.bookForm.get('author') as FormArray;
    if (this.book) {
      this.setDataToForm(this.book);
    } else {
      this.addItem();
    }
  }

  setDataToForm(book: Book) {
    this.bookForm.patchValue({
      name: book.name,
      cost: book.cost,
      currencyIn: book.currencyIn,
      description: book.description,
      imageUrl: book.imageUrl
    });
    for (let i = 0; i < book.author.length; i++) {
      this.authors.push(this.formBuilder.control(book.author[i]));
    }
  }

  createAuthor(): FormControl {
    return this.formBuilder.control('');
  }

  get f() { return this.bookForm.controls; }

  addItem(): void {
    this.authors.push(this.createAuthor());
  }

  onSubmit() {
    this.submitted = true;
    if (this.bookForm.invalid) {
      return;
    }
    if (this.book) {
      const editBook = { ...this.book, ...this.bookForm.value };
      this.bookService.updateBookById(editBook).subscribe((res: Book) => {
        if (res) {
          this.bookForm.reset();
          this.router.navigate(['/admin/list']);
        }
      });
    } else {
      this.bookService.postBook(this.bookForm.value).subscribe((res) => {
        if (res.message === 'success') {
          this.bookForm.reset();
          this.router.navigate(['/admin/list']);
        }
      });
    }
  }

}
