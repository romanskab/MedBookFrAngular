import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientComponent} from './patient.component';
import {PatMyPageComponent} from './pat-my-page/pat-my-page.component';
import {PatHistoryInDoctorComponent} from './pat-history-in-doctor/pat-history-in-doctor.component';
import {PatHistoryAnalyzesComponent} from './pat-history-analyzes/pat-history-analyzes.component';
import {PatRecordToDoctorComponent} from './pat-record-to-doctor/pat-record-to-doctor.component';


const routes: Routes = [
  {path: '', component: PatientComponent, children: [
      {path: 'myPage', component: PatMyPageComponent},
      {path: 'recordToDoctor', component: PatRecordToDoctorComponent},
      {path: 'historyInDoctor', component: PatHistoryInDoctorComponent},
      {path: 'historyAnalyzes', component: PatHistoryAnalyzesComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
