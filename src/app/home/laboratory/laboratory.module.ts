import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LaboratoryRoutingModule} from './laboratory-routing.module';
import {LaboratoryComponent} from './laboratory.component';
import {MaterialModule} from '../../material.module';
import {LabLeftPanelComponent} from './lab-left-panel/lab-left-panel.component';
import {LabMyPageComponent} from './lab-my-page/lab-my-page.component';
import {LabRecordResultsComponent} from './lab-record-results/lab-record-results.component';


@NgModule({
  declarations: [LaboratoryComponent, LabLeftPanelComponent, LabMyPageComponent, LabRecordResultsComponent],
  imports: [
    CommonModule,
    LaboratoryRoutingModule,
    MaterialModule
  ]
})
export class LaboratoryModule {
}
