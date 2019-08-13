import {Component, OnInit} from '@angular/core';
import {BookManagerService} from '../../services/book-manager.service';
import {IBook} from '../../models/IBook';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  listBook: IBook[] = [];

  constructor(private bookManagerService: BookManagerService) {
  }

  ngOnInit() {
    this.bookManagerService.getAllBooks().subscribe(
      next => this.listBook = next,
      error => console.log(error)
    );
  }


}
