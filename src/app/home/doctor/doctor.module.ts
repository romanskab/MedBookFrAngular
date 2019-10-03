import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DoctorRoutingModule} from './doctor-routing.module';
import {DoctorComponent} from './doctor.component';
import {DocLeftPanelComponent} from './doc-left-panel/doc-left-panel.component';
import {DocMyPageComponent} from './doc-my-page/doc-my-page.component';
import {DocReceptionComponent} from './doc-reception/doc-reception.component';
import {DocWorkCalendarComponent} from './doc-work-calendar/doc-work-calendar.component';
import {DocHistoryReceptionsComponent} from './doc-history-receptions/doc-history-receptions.component';
import {MaterialModule} from '../../material.module';
import {FormsModule} from '@angular/forms';
import { HistoryVisitsComponent } from './doc-reception/history-visits/history-visits.component';
import { HistoryAnalyzesComponent } from './doc-reception/history-analyzes/history-analyzes.component';
import { RecordResultComponent } from './doc-reception/record-result/record-result.component';
import { RecordIndicatorsComponent } from './doc-reception/record-indicators/record-indicators.component';


@NgModule({
  declarations: [DoctorComponent, DocLeftPanelComponent, DocMyPageComponent, DocReceptionComponent, DocWorkCalendarComponent,
    DocHistoryReceptionsComponent,
    HistoryVisitsComponent,
    HistoryAnalyzesComponent,
    RecordResultComponent,
    RecordIndicatorsComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class DoctorModule {
}
