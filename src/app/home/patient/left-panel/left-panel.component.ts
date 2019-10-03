import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../../services/patient.service';
import {Patient} from '../../../models/Patient';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  currentPatient: Patient;

  constructor(private patientService: PatientService) {
  }

  ngOnInit() {
    this.patientService.getCurrentPatient().subscribe(value => {
      this.currentPatient = value;
    });
  }

}
