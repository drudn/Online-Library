import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/models/book';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books:IBook[];
  constructor(private bookService:BookService) {

   }

  ngOnInit(): void {
   this.bookService.getBooks().subscribe(res=>this.books=res)

  }

}
