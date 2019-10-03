import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../../../models/Patient';
import {PatientComponent} from '../patient.component';
import {PatientService} from '../../../services/patient.service';

@Component({
  selector: 'app-pat-my-page',
  templateUrl: './pat-my-page.component.html',
  styleUrls: ['./pat-my-page.component.css']
})
export class PatMyPageComponent implements OnInit {
  currentPatient: Patient;

  constructor(
    private patientService: PatientService
  ) {

  }

  ngOnInit() {
    this.patientService.getCurrentPatient().subscribe(value => {
      this.currentPatient = value;
    });
  }

}
