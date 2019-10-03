import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RegDoctorComponent} from './register/reg-doctor/reg-doctor.component';
import {RegLaboratoryComponent} from './register/reg-laboratory/reg-laboratory.component';
import {RegPatientComponent} from './register/reg-patient/reg-patient.component';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'register', component: RegisterComponent, children: [
      {path: 'doctor', component: RegDoctorComponent},
      {path: 'patient', component: RegPatientComponent},
      {path: 'laboratory', component: RegLaboratoryComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
