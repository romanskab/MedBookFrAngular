import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatRadioModule
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
    MatButtonToggleModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatButtonToggleModule
  ]
})
export class MaterialModule {
}
