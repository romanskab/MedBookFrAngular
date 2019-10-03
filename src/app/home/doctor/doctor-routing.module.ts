import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DoctorComponent} from './doctor.component';
import {DocMyPageComponent} from './doc-my-page/doc-my-page.component';
import {DocReceptionComponent} from './doc-reception/doc-reception.component';
import {DocWorkCalendarComponent} from './doc-work-calendar/doc-work-calendar.component';
import {DocHistoryReceptionsComponent} from './doc-history-receptions/doc-history-receptions.component';
import {HistoryAnalyzesComponent} from './doc-reception/history-analyzes/history-analyzes.component';
import {HistoryVisitsComponent} from './doc-reception/history-visits/history-visits.component';
import {RecordResultComponent} from './doc-reception/record-result/record-result.component';
import {RecordIndicatorsComponent} from './doc-reception/record-indicators/record-indicators.component';


const routes: Routes = [
  {
    path: '', component: DoctorComponent, children: [
      {path: 'myPage', component: DocMyPageComponent},
      {path: 'reception', component: DocReceptionComponent, children: [
          {path: 'historyVisits', component: HistoryVisitsComponent},
          {path: 'historyAnalyzes', component: HistoryAnalyzesComponent},
          {path: 'recordResult', component: RecordResultComponent},
          {path: 'recordIndicators', component: RecordIndicatorsComponent}
        ]},
      {path: 'workCalendar', component: DocWorkCalendarComponent},
      {path: 'historyReceptions', component: DocHistoryReceptionsComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule {
}
