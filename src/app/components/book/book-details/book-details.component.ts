import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/models/book';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';
import { IBookHistory } from 'src/app/models/bookhistory';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookdeleted:boolean;
  bookhistory:IBookHistory[];
  book:IBook;

  constructor(private bookService:BookService, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadBookHistory();
    this.loadBook();
  }
  loadBook(){
    this.bookService.getBook(+this.activateRoute.snapshot.paramMap.get('id')).subscribe(res=>{this.book=res;
    },error=>{console.log(error);})
}
deleteBook(){
  this.bookdeleted==true;
  this.bookService.deleteBook(+this.activateRoute.snapshot.paramMap.get('id')).subscribe();
}
loadBookHistory(){
  this.bookService.getBookHistory(+this.activateRoute.snapshot.paramMap.get('id')).subscribe(res=>{this.bookhistory=res;
  },error=>{console.log(error);})
}
}
