import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,

    LayoutModule,
    ComponentsModule,

    SharedModule
  ],
  exports:[
    LayoutModule
  ]
})
export class CoreModule { }
