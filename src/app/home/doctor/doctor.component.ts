import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../services/patient.service';
import {DoctorService} from '../../services/doctor.service';
import {Doctor} from '../../models/Doctor';
import {Router} from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  isLeftPanel;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.toMyPage();
  }

  toMyPage() {
    this.router.navigate(['doctor', 'myPage']);
    this.isLeftPanel = false;
  }

  toReception() {
    this.router.navigate(['doctor', 'reception']);
    this.isLeftPanel = true;
  }

  toWorkCalendar() {
    this.router.navigate(['doctor', 'workCalendar']);
    this.isLeftPanel = true;
  }

  toHistoryReceptions() {
    this.router.navigate(['doctor', 'historyReceptions']);
    this.isLeftPanel = true;
  }

  exit() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

}
