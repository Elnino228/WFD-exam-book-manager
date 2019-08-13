import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IBook} from '../../models/IBook';
import {BookManagerService} from '../../book-manager.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  formBook: FormGroup;
  book: IBook;

  constructor(private formBuilder: FormBuilder,
              private bookManagerService: BookManagerService,
              private router: Router,
              private route: ActivatedRoute) {
    this.book = {
      id: +'',
      title: '',
      author: '',
      description: ''
    };
  }

  ngOnInit() {
    this.formBook = this.formBuilder.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  doAdd() {
    if (this.formBook.valid) {
      this.bookManagerService.createBook(this.book).subscribe();
      this.router.navigateByUrl('/books');
    }
  }
}
