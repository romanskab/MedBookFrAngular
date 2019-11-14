import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatDatepickerModule, MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule, MatSortModule,
  MatTableModule
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
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatIconModule
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
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatIconModule
  ]
})
export class MaterialModule {
}
