import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatRadioModule, MatSelectModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatSelectModule,
    FormsModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatSelectModule,
    FormsModule
  ]
})
export class MaterialModule {
}
