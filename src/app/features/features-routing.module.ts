import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { 
        path: '', 
        children:[
            //add dashboard route here
        ]
    },
    { 
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FeatureRoutingModule { }
  