import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { PageEntity } from '@course-angular-cms/data';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: HttpClient) { }

  getPages(): Observable<PageEntity[]> {
    return this.http.get<PageEntity[]>('/api/pages')
  }
}
