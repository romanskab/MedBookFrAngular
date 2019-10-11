import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../../../models/Patient';
import {PatientService} from '../../../services/patient.service';
import {Visit} from '../../../models/Visit';

@Component({
  selector: 'app-pat-my-page',
  templateUrl: './pat-my-page.component.html',
  styleUrls: ['./pat-my-page.component.css']
})
export class PatMyPageComponent implements OnInit {
  currentPatient: Patient;
  lastVisit: Visit;

  constructor(
    private patientService: PatientService
  ) {

  }

  ngOnInit() {
    this.patientService.getCurrentPatient().subscribe(value => {
      this.currentPatient = value;
      // this.patientService.getLastVisitToDoctor(this.currentPatient.id).subscribe(value1 => {
      //   console.log(value1);
      //   this.lastVisit = value1;
      // });

    });


  }

}
