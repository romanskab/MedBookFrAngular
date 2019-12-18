import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../../../models/Patient';
import {PatientService} from '../../../services/patient.service';
import {Visit} from '../../../models/Visit';
import {TestResult} from '../../../models/TestResult';
import {ConfigService} from '../../../services/config.service';

@Component({
  selector: 'app-pat-my-page',
  templateUrl: './pat-my-page.component.html',
  styleUrls: ['./pat-my-page.component.css']
})
export class PatMyPageComponent implements OnInit {
  currentPatient: Patient;
  lastVisit: Visit;
  nextVisit: Visit;

  lastWeight: TestResult;
  lastHeight: TestResult;

  pathToImage;

  constructor(
    private patientService: PatientService,
    private configService: ConfigService
  ) {

  }

  ngOnInit() {
    this.patientService.getCurrentPatient().subscribe(value => {
      console.log(value);
      this.currentPatient = value;

      if (this.currentPatient.image === null) {
        this.pathToImage = 'assets/images/photo_patient_default.jpg';
      } else {
        this.pathToImage = this.configService.api + '/images/' + this.currentPatient.image;
      }

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
      this.patientService.getNextVisitToDoctor(this.currentPatient.id).subscribe(value4 => {
        console.log('next visit:');
        console.log(value4);
        this.nextVisit = value4;
      });
    });


  }

}
