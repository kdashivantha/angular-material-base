import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,

    ComponentsModule,
    SharedModule
  ],
  exports:[

  ]
})
export class CoreModule { }
