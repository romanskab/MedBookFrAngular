import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../../../models/Patient';
import {PatientService} from '../../../services/patient.service';
import {Visit} from '../../../models/Visit';
import {TestResult} from '../../../models/TestResult';

@Component({
  selector: 'app-pat-my-page',
  templateUrl: './pat-my-page.component.html',
  styleUrls: ['./pat-my-page.component.css']
})
export class PatMyPageComponent implements OnInit {
  currentPatient: Patient;
  lastVisit: Visit;

  lastWeight: TestResult;
  lastHeight: TestResult;

  constructor(
    private patientService: PatientService
  ) {

  }

  ngOnInit() {
    this.patientService.getCurrentPatient().subscribe(value => {
      console.log(value);
      this.currentPatient = value;
      this.patientService.getLastVisitToDoctor(this.currentPatient.id).subscribe(value1 => {
        console.log(value1);
        this.lastVisit = value1;
      });
      this.patientService.getLastTestResult(this.currentPatient.id, 'ріст').subscribe(value2 => {
        console.log('ріст ');
        console.log(value2);
        this.lastHeight = value2;
      });
      this.patientService.getLastTestResult(this.currentPatient.id, 'вага').subscribe(value3 => {
        console.log('вага ');
        console.log(value3);
        this.lastWeight = value3;
      });
    });


  }

}
