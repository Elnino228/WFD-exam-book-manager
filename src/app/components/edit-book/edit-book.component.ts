import {Component, OnInit} from '@angular/core';
import {IBook} from '../../models/IBook';
import {BookManagerService} from '../../book-manager.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  formEdit: FormGroup;
  book: IBook;

  constructor(private bookManagerService: BookManagerService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formEdit = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.bookManagerService.getBookById(+id).subscribe(
      next => {
        this.book = next;
        this.formEdit.patchValue(this.book);
      }
    );

  }

  update() {
    const data = this.formEdit.value;
    this.bookManagerService.updateBook(data).subscribe(
      next => this.router.navigateByUrl('/books')
    );
  }
}
