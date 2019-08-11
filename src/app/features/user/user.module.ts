import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { RolesComponent } from './roles/roles.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserListComponent, 
    UserCreateComponent, 
    RolesComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
