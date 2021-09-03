import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookComponent} from './components/book/book.component';
import { RouterModule,Routes } from '@angular/router';
import { BookService } from './components/book/book.service';
import { BookDetailsComponent } from './components/book/book-details/book-details.component';
import { AddComponent } from './components/book/add/add.component';

const routes:Routes=[

  {path:'', component:BookComponent},
  {path:'book/add',component:AddComponent},
  {path:'book/details/:id',component:BookDetailsComponent}
];
@NgModule({
  declarations: [],
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
