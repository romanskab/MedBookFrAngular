import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LaboratoryComponent} from './laboratory.component';
import {DoctorComponent} from '../doctor/doctor.component';
import {DocMyPageComponent} from '../doctor/doc-my-page/doc-my-page.component';
import {DocReceptionComponent} from '../doctor/doc-reception/doc-reception.component';
import {DocWorkCalendarComponent} from '../doctor/doc-work-calendar/doc-work-calendar.component';
import {DocHistoryReceptionsComponent} from '../doctor/doc-history-receptions/doc-history-receptions.component';
import {LabMyPageComponent} from './lab-my-page/lab-my-page.component';
import {LabRecordResultsComponent} from './lab-record-results/lab-record-results.component';


const routes: Routes = [
  {
    path: '', component: LaboratoryComponent, children: [
      {path: 'myPage', component: LabMyPageComponent},
      {path: 'recordResult', component: LabRecordResultsComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratoryRoutingModule {
}
