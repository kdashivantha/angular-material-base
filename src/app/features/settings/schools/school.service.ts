import { School } from './school.model';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchConfig } from 'src/app/core/models/search.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private apiService: ApiService) { }

  query(query:SearchConfig):Observable<{students: School[], total: number}> {

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
      `/schools`,
      new HttpParams({ fromObject: params })
    );
  }
  getAll(): Observable<School[]> {
    return this.apiService.get(`/schools`)
      .pipe(map(data => data));
  }

  //create new

  //edit

  //delete
}
