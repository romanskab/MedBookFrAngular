import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientComponent} from './patient.component';
import {PatMyPageComponent} from './pat-my-page/pat-my-page.component';
import {PatHistoryAnalyzesComponent} from './pat-history-analyzes/pat-history-analyzes.component';
import {PatRecordToDoctorComponent} from './pat-record-to-doctor/pat-record-to-doctor.component';
import {PatHistoryVisitsComponent} from './pat-history-visits/pat-history-visits.component';
import {PhaChartComponent} from './pat-history-analyzes/pha-chart/pha-chart.component';


const routes: Routes = [
  {path: '', component: PatientComponent, children: [
      {path: 'myPage', component: PatMyPageComponent},
      {path: 'recordToDoctor', component: PatRecordToDoctorComponent},
      {path: 'historyVisits', component: PatHistoryVisitsComponent},
      {path: 'historyAnalyzes', component: PatHistoryAnalyzesComponent, children: [
          {path: ':title', component: PhaChartComponent}
        ]},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
