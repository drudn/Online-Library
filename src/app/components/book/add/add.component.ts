import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm,FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IBook } from 'src/app/models/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
bookadded:boolean;
author:string;
title:string;
isbn:number;
description:Text;
quantity:number;
newname = new FormControl('');
bookForm = new FormGroup({
  author:new FormControl(''),
  title:new FormControl(''),
  isbn:new FormControl(''),
  description:new FormControl(''),
  quantity:new FormControl(''),

});
  constructor(private bookService:BookService, private toastr:ToastrService,private activateRoute:ActivatedRoute, private httpClient:HttpClient,private router: Router ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    let book:IBook={

      author:this.bookForm.controls.author.value,
      isbn:this.bookForm.controls.isbn.value?this.bookForm.controls.isbn.value:0,
      description:this.bookForm.controls.description.value,
      title:this.bookForm.controls.title.value
    };
    this.bookService.addnewbook(book);
    this.bookadded=true;
    if(this.bookForm.controls.author.value==""||this.bookForm.controls.title.value==""){

      this.toastr.warning('Book must have a title and author');

     }
     this.router.navigate(['']);

  }


}
