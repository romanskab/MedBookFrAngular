import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthComponent} from './auth.component';
import {RegDoctorComponent} from './register/reg-doctor/reg-doctor.component';
import {RegPatientComponent} from './register/reg-patient/reg-patient.component';
import {RegLaboratoryComponent} from './register/reg-laboratory/reg-laboratory.component';
import {MaterialModule} from '../material.module';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthComponent, RegDoctorComponent, RegPatientComponent, RegLaboratoryComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    // FormsModule,
    MaterialModule
  ],
  exports: []
})
export class AuthModule {
}
