import { ListViewComponent } from './list-view/list-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemViewComponent } from './item-view/item-view.component';

const routes: Routes = [
      {
          path:'',
          component: ListViewComponent
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
