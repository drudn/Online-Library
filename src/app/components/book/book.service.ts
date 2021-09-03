import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBookHistory } from 'src/app/models/bookhistory';
import { IBook } from '../../models/book'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl='https://localhost:44311/api/';
  constructor(private http: HttpClient) {
  }

  getBook(id:number){
    return this.http.get<IBook>(this.baseUrl+'book/'+id);
  }
  getBooks(){
    return this.http.get<IBook[]>(this.baseUrl+'book');
  }

  addBook(addbook:IBook){
    return this.http.post<IBook>(this.baseUrl+'book/add',addbook).toPromise();
  }
  addnewbook(book:IBook){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    this.http.post<IBook>('https://localhost:44311/api/book/add', JSON.stringify(book), httpOptions).subscribe(
);

  }
  deleteBook(id:number){
    return this.http.delete<IBook>(this.baseUrl+'book/delete/'+id.toString());
  }

  getBookHistory(id:number){
    return this.http.get<IBookHistory[]>(this.baseUrl+'book/'+id+'/history')
  }

  borrowBook(bookhistory:IBookHistory){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    this.http.post<IBook>(this.baseUrl+'book/dateborrowed', JSON.stringify(bookhistory), httpOptions).subscribe(

      );
  }
  returnBook(bookhistory:IBookHistory){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    this.http.post<IBook>(this.baseUrl+'book/datereturned', JSON.stringify(bookhistory), httpOptions).subscribe(

    );
  }
}
