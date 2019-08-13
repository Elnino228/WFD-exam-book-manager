import {Component, OnInit} from '@angular/core';
import {BookManagerService} from '../../book-manager.service';
import {ActivatedRoute} from '@angular/router';
import {IBook} from '../../models/IBook';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
  book: IBook;

  constructor(private bookManagerService: BookManagerService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.bookManagerService.getBookById(+id).subscribe(
      next => this.book = next
    );
  }

}
