import { HttpClient, HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { IBook } from 'src/app/models/book';
import { IBookHistory } from 'src/app/models/bookhistory';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
@Input() book:IBook;
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

  borrowBook(){

let bookhistory:IBookHistory={

  bookid:this.book.id,
  dateborrowed:Date.now().toString(),
  datereturned:null,
};
this.bookService.borrowBook(bookhistory);
  }
  returnBook(){

    let bookhistory:IBookHistory={

      bookid:this.book.id,
      dateborrowed:null,
      datereturned:Date.now().toString(),
    };
this.bookService.returnBook(bookhistory);
      }
}
