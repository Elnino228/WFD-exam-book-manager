import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListBookComponent} from './components/list-book/list-book.component';
import {NewBookComponent} from './components/new-book/new-book.component';
import {DetailBookComponent} from './components/detail-book/detail-book.component';
import {DeleteBookComponent} from './components/delete-book/delete-book.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { EditBookComponent } from './components/edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBookComponent,
    NewBookComponent,
    DetailBookComponent,
    DeleteBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
