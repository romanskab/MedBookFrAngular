import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LaboratoryService} from '../../../services/laboratory.service';
import {Patient} from '../../../models/Patient';
import {Laboratory} from '../../../models/Laboratory';
import {Test} from '../../../models/Test';
import {TestResult} from '../../../models/TestResult';
import {Router} from '@angular/router';
import {ConfigService} from '../../../services/config.service';

@Component({
  selector: 'app-lab-record-results',
  templateUrl: './lab-record-results.component.html',
  styleUrls: ['./lab-record-results.component.css']
})
export class LabRecordResultsComponent implements OnInit {
  currentLaboratory: Laboratory;
  patient: Patient;

  pathToImage;

  testsTitles: Test[] = [];
  test: Test;

  results: TestResult[] = [];

  isError = false;
  isSuccess = false;

  constructor(private laboratoryService: LaboratoryService,
              private configService: ConfigService) {
  }

  ngOnInit() {
    this.laboratoryService.currentLaboratorySubject.subscribe(value => {
      this.currentLaboratory = value;
    });
  }

  find(form: NgForm) {
    console.log(form.value.email);
    this.laboratoryService.getPatientByUsername(form.value.email).subscribe(value => {
      console.log(value);
      this.patient = value;
      if (this.patient.image === null) {
        this.pathToImage = 'assets/images/photo_patient_default.jpg';
      } else {
        this.pathToImage = this.configService.api + '/images/' + this.patient.image;
      }
      this.laboratoryService.getTestsTitles().subscribe(value1 => {
        this.testsTitles = value1;
        console.log(this.testsTitles);
      });
    });
  }

  addResult(form: NgForm) {
    console.log('add result');
    const testResult: TestResult = new TestResult();
    testResult.test = this.test;
    testResult.result = form.value.result;
    this.results.push(testResult);
    console.log(this.results);
    this.testsTitles = this.testsTitles.filter(value => value !== this.test);
    console.log(this.testsTitles);
  }

  saveResult() {
    console.log('save result!');
    this.laboratoryService.saveResults(this.results, this.patient.id, this.currentLaboratory.id).subscribe(value => {
      console.log(value);
      this.navigateToExitWithTimeout();
    }, error1 => {
      this.isError = true;
    });
  }

  navigateToExitWithTimeout() {
    this.isSuccess = true;
    setTimeout(() => {
      this.patient = null;
      this.testsTitles = [];
      this.results = [];
      this.isError = false;
      this.isSuccess = false;
    }, 2000);
  }

}
