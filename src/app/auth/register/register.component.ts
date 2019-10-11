import {Component, Input, OnInit} from '@angular/core';
import {ThemePalette} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.toFormPatient();
  }

  toFormPatient() {
    this.router.navigate(['/auth/register/patient']);
  }

  toFormDoctor() {
    this.router.navigate(['/auth/register/doctor']);
  }

  toFormLaboratory() {
    this.router.navigate(['/auth/register/laboratory']);
  }

  exit() {
    this.router.navigate(['auth', 'login']);
  }
}
