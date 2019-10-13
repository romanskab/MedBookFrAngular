import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../../services/patient.service';
import {Patient} from '../../../models/Patient';
import {Visit} from '../../../models/Visit';

@Component({
  selector: 'app-pat-history-visits',
  templateUrl: './pat-history-visits.component.html',
  styleUrls: ['./pat-history-visits.component.css']
})
export class PatHistoryVisitsComponent implements OnInit {

  currentPatient: Patient;
  visits: Visit[];

  constructor(private patientService: PatientService) {
  }

  ngOnInit() {
    this.patientService.currentPatientSubject.subscribe(value => {
      this.currentPatient = value;
      this.patientService.getAllFinishedVisits(this.currentPatient.id).subscribe(value1 => {
        this.visits = value1;
        console.log(this.visits);
      });
    });
  }

}
