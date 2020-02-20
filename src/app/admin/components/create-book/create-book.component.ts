import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { BookService } from '@common/services/book.service';
@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  bookForm: FormGroup;
  authors: FormArray;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private bookService: BookService) { }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      name: ['', Validators.required],
      cost: ['', Validators.required],
      currencyIn: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      author: this.formBuilder.array([this.createAuthor()])
    });
  }

  createAuthor(): FormControl {
    return this.formBuilder.control('');
  }

  get f() { return this.bookForm.controls; }

  addItem(): void {
    this.authors = this.bookForm.get('author') as FormArray;
    this.authors.push(this.createAuthor());
  }

  onSubmit() {
    this.submitted = true;
    if (this.bookForm.invalid) {
      return;
    }
    this.bookService.postBook(this.bookForm.value).subscribe((res) => {
      if (res.message === 'success') {
        this.bookForm.reset();
      }
    });
  }

}
