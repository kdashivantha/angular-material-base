import { SchoolService } from './../school.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { School } from '../school.model';
import { Router } from '@angular/router';
import { merge, of } from 'rxjs';
import { startWith, switchMap, map, catchError, delay } from 'rxjs/operators';
import { SearchConfig } from 'src/app/core/models/search.model';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss']
})
export class SchoolListComponent implements OnInit, AfterViewInit {

  public displayedColumns = ['id', 'name', 'district'];
  public dataSource = new MatTableDataSource<School>();

  resultsLength = 100;
  isLoadingResults = false;

  @ViewChild(MatSort,{static:false}) sort: MatSort;
  @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;
  
  constructor(
    private router: Router,
    private service: SchoolService
  ) { }

  ngOnInit() {
    //this.getAllStudents();
  }
  ngAfterViewInit(): void {
    //this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        delay(0),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.service.query( <SearchConfig>{
            _page: this.paginator.pageIndex + 1,
            _limit: this.paginator.pageSize,
            _sort: this.sort.active || "id",
            _order: this.sort.direction || "asc"
          });
        }),
        map((data,total) => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          //this.resultsLength = data.total_count;

          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          return of([]);
        })
      ).subscribe(data => this.dataSource.data = data as School[]);

  }

}
