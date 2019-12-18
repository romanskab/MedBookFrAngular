import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../../services/patient.service';
import {Patient} from '../../../models/Patient';
import {ConfigService} from '../../../services/config.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  currentPatient: Patient;

  pathToImage;

  constructor(private patientService: PatientService,
              private configService: ConfigService) {
  }

  ngOnInit() {
    this.patientService.getCurrentPatient().subscribe(value => {
      this.currentPatient = value;

      if (this.currentPatient.image === null) {
        this.pathToImage = 'assets/images/photo_patient_default.jpg';
      } else {
        this.pathToImage = this.configService.api + '/images/' + this.currentPatient.image;
      }
    });
  }

}
