import {Component, OnInit} from '@angular/core';
import {IBook} from '../../models/IBook';
import {BookManagerService} from '../../book-manager.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  book: IBook;

  constructor(private bookManagerService: BookManagerService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.bookManagerService.getBookById(+id).subscribe(
      next => this.book = next
    );
  }

  delete() {
    this.bookManagerService.removeBook(this.book.id).subscribe(
      next => this.router.navigateByUrl('/books'));
  }
}
