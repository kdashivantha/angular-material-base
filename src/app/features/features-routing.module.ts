import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { 
        path: 'students',
        loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)
    },
    { 
        path: '', 
        children:[
            //add dashboard route here
        ]
    },
    { 
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
    },
    { 
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FeatureRoutingModule { }
  