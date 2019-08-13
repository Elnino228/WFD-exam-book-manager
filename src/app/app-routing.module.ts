import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewBookComponent} from './components/new-book/new-book.component';
import {ListBookComponent} from './components/list-book/list-book.component';
import {DetailBookComponent} from './components/detail-book/detail-book.component';
import {DeleteBookComponent} from './components/delete-book/delete-book.component';
import {EditBookComponent} from './components/edit-book/edit-book.component';


const routes: Routes = [
  {path: 'books', component: ListBookComponent},
  {path: 'books/create', component: NewBookComponent},
  {path: 'books/edit/:id', component: EditBookComponent},
  {path: 'books/:id', component: DetailBookComponent},
  {path: 'books/delete/:id', component: DeleteBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
