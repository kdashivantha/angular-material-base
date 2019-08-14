import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './shared/layout/main/main.component';

const routes: Routes = [
  { 
    path: '', 
    component: MainComponent,
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) 
  },
  { 
    path: '**', 
    redirectTo: '' 
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
