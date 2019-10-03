import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PatientRoutingModule} from './patient-routing.module';
import {PatientComponent} from './patient.component';
import {MaterialModule} from '../../material.module';
import {PatMyPageComponent} from './pat-my-page/pat-my-page.component';
import {PatHistoryInDoctorComponent} from './pat-history-in-doctor/pat-history-in-doctor.component';
import {PatHistoryAnalyzesComponent} from './pat-history-analyzes/pat-history-analyzes.component';
import {LeftPanelComponent} from './left-panel/left-panel.component';
import { PatRecordToDoctorComponent } from './pat-record-to-doctor/pat-record-to-doctor.component';


@NgModule({
  declarations: [PatientComponent, PatMyPageComponent, PatHistoryInDoctorComponent, PatHistoryAnalyzesComponent,
    LeftPanelComponent,
    PatRecordToDoctorComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    MaterialModule
  ]
})
export class PatientModule {
}
