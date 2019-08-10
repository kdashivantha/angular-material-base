import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [AuthComponent, MainComponent, HeaderComponent, SidenavComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MainComponent
  ]
})
export class LayoutModule { }
