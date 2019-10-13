import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../services/patient.service';
import {Patient} from '../../models/Patient';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  currentPatient: Patient;
  isLeftPanel;

  constructor(private patientService: PatientService,
              private router: Router) {
  }

  ngOnInit() {
    this.getCurrentPatient();
    this.toMyPage();
  }

  getCurrentPatient() {
    this.patientService.getCurrentPatient().subscribe(value => {
      this.patientService.currentPatientSubject.next(value);
      this.currentPatient = value;
    });
  }

  toMyPage() {
    this.router.navigate(['patient', 'myPage']);
    this.isLeftPanel = false;
  }

  toRecordToDoctor() {
    this.router.navigate(['patient', 'recordToDoctor']);
    this.isLeftPanel = true;
  }

  toHistoryInDoctor() {
    this.router.navigate(['patient', 'historyVisits']);
    this.isLeftPanel = true;
  }

  toHistoryAnalyzes() {
    this.router.navigate(['patient', 'historyAnalyzes']);
    this.isLeftPanel = true;
  }

  exit() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
