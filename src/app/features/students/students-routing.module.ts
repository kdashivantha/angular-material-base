import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemViewComponent } from './item-view/item-view.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
      {
          path:'',
          component: StudentListComponent
      },
      {
          path:':id',
          component: ItemViewComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
