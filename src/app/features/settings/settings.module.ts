import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SchoolListComponent } from './schools/school-list/school-list.component';
import { SchoolDetailComponent } from './schools/school-detail/school-detail.component';
import { SettingPageComponent } from './setting-page/setting-page.component';
import { CoreModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SchoolListComponent, SchoolDetailComponent, SettingPageComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class SettingsModule { }
