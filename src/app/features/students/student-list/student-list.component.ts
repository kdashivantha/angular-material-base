import { StudentService } from './../student.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../student.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { merge, of } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { SearchConfig } from 'src/app/core/models/search.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit, AfterViewInit {

  public displayedColumns = ['id', 'fullName', 'email','gender', 'phoneNumber','school','address', 'details', 'delete'];
  public dataSource = new MatTableDataSource<Student>();

  resultsLength = 500;
  isLoadingResults = false;

  @ViewChild(MatSort,{static:false}) sort: MatSort;
  @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;
  
  constructor(private studentService: StudentService) { }

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
        switchMap(() => {
          this.isLoadingResults = true;
          return this.studentService.query( <SearchConfig>{
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
      ).subscribe(data => this.dataSource.data = data as Student[]);

  }
}
