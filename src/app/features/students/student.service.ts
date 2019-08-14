import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Observable } from 'rxjs';
import { Student } from './student.model';
import { map } from 'rxjs/internal/operators/map';
import { SearchConfig } from 'src/app/core/models/search.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private apiService: ApiService) { }

  query(query:SearchConfig):Observable<{students: Student[], total: number}> {

    // Convert SearchObject to httpParams
    // 3 ways
    /*
        //1. object set
        const params = new HttpParams();

        params.set("_page", "1")
        params.set("_limit", "10");

        //2. from String
        const params = new HttpParams({fromString: "_page=1&_limit=10"});
        //3. from Object
        const params = new HttpParams({ fromObject: { _page: "1", _limit: "10" } });

    */

    const params = {};

    Object.keys(query)
    .forEach((key) => {
      params[key] = query[key];
    });

    return this.apiService
    .get(
      `/students`,
      new HttpParams({ fromObject: params })
    );
  }

  getAll(): Observable<Student[]> {
    return this.apiService.get(`/students`)
      .pipe(map(data => data));
  }


}
