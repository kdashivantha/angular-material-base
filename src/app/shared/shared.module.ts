import { MaterialModule } from 'src/app/shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutModule,
    FlexLayoutModule
  ],
  exports:[
    MaterialModule,
    LayoutModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
