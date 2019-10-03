import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'doctor', loadChildren: './doctor/doctor.module#DoctorModule'},
  {path: 'patient', loadChildren: './patient/patient.module#PatientModule'},
  {path: 'laboratory', loadChildren: './laboratory/laboratory.module#LaboratoryModule'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
