import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentCreateComponent } from './student-create/student-create.component';

@NgModule({
  declarations: [
    StudentListComponent, 
    StudentDetailComponent, 
    StudentCreateComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class StudentsModule { }
