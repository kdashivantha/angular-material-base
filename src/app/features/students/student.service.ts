import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Observable } from 'rxjs';
import { Student } from './student.model';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private apiService: ApiService) { }

  getAll(): Observable<Student[]> {
    return this.apiService.get(`/students`)
      .pipe(map(data => data));
  }


}
