import {Component, OnInit} from '@angular/core';
import {DoctorService} from '../../../../services/doctor.service';
import {Test} from '../../../../models/Test';
import {Doctor} from '../../../../models/Doctor';
import {Patient} from '../../../../models/Patient';
import {TestResult} from '../../../../models/TestResult';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-record-indicators',
  templateUrl: './record-indicators.component.html',
  styleUrls: ['./record-indicators.component.css']
})
export class RecordIndicatorsComponent implements OnInit {
  currentDoctor: Doctor;
  currentPatient: Patient;

  testsTitles: Test[];
  test: Test;

  testResult: TestResult = new TestResult();

  constructor(private doctorService: DoctorService) {
  }

  ngOnInit() {
    this.doctorService.getTestsTitles().subscribe(value => {
      console.log(value);
      this.testsTitles = value;
      this.doctorService.currentVisitSubject.subscribe(value1 => {
        this.currentDoctor = value1.doctor;
        this.currentPatient = value1.patient;
      });
    });
  }

  saveResult() {
    console.log(this.testResult);
    this.doctorService.saveTestResult(this.testResult.result, this.test.id, this.currentPatient.id, this.currentDoctor.id)
      .subscribe(value => {
        console.log(value);
      });
  }
}
