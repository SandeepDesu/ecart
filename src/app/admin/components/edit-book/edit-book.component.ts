import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '@common/services/book.service';
import { Book } from '@common/models/book';
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  book;
  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      this.bookService.getBookById(params.get('id')).subscribe((book: Book) => {
        this.book = book;
      });
    });
  }
}
