import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PageService } from '../services/page.service';
import { PageEntity } from '@course-angular-cms/data';

@Component({
  selector: 'course-angular-cms-pages-list',
  templateUrl: './pages-list.component.html',
  styleUrls: ['./pages-list.component.css']
})
export class PagesListComponent implements OnInit {

  pages: PageEntity[] = [];

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.pageService.getPages()
      .subscribe(pages => this.pages = pages);
  }

}
