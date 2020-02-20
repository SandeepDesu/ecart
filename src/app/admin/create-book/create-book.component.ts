import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { BookService } from '@common/services/book.service';
@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  bookForm: FormGroup;
  authors: FormArray;
  constructor(private formBuilder: FormBuilder, private bookService: BookService) { }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      name: '',
      cost: '',
      currencyIn: '',
      description: '',
      imageUrl: '',
      author: this.formBuilder.array([this.createAuthor()])
    });
  }

  createAuthor(): FormControl {
    return this.formBuilder.control('');
  }

  addItem(): void {
    this.authors = this.bookForm.get('author') as FormArray;
    this.authors.push(this.createAuthor());
  }

  onSubmit() {
    this.bookService.postBook(this.bookForm.value).subscribe((res) =>{
      if(res.message === 'success'){
        this.bookForm.reset();
      }
    });
  }

}
