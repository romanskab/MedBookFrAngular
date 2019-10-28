import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PatientRoutingModule} from './patient-routing.module';
import {PatientComponent} from './patient.component';
import {MaterialModule} from '../../material.module';
import {PatMyPageComponent} from './pat-my-page/pat-my-page.component';
import {PatHistoryAnalyzesComponent} from './pat-history-analyzes/pat-history-analyzes.component';
import {LeftPanelComponent} from './left-panel/left-panel.component';
import {PatRecordToDoctorComponent} from './pat-record-to-doctor/pat-record-to-doctor.component';
import {PatHistoryVisitsComponent} from './pat-history-visits/pat-history-visits.component';
import {PhaChartComponent} from './pat-history-analyzes/pha-chart/pha-chart.component';



@NgModule({
  declarations: [PatientComponent, PatMyPageComponent, PatHistoryAnalyzesComponent,
    LeftPanelComponent,
    PatRecordToDoctorComponent,
    PatHistoryVisitsComponent,
    PhaChartComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    MaterialModule
  ]
})
export class PatientModule {
}
