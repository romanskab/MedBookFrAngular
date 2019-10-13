import {Component, OnInit} from '@angular/core';
import {DoctorService} from '../../../../services/doctor.service';
import {Visit} from '../../../../models/Visit';

@Component({
  selector: 'app-history-visits',
  templateUrl: './history-visits.component.html',
  styleUrls: ['./history-visits.component.css']
})
export class HistoryVisitsComponent implements OnInit {

  patientId;
  visits: Visit[] = [];

  constructor(private doctorService: DoctorService) {
  }

  ngOnInit() {
    this.doctorService.currentVisitSubject.subscribe(value => {
      this.patientId = value.patient.id;
    });
    this.doctorService.getFinishedVisitsByPatientId(this.patientId).subscribe(value => {
      this.visits = value;
      console.log(this.visits);
    });
  }

}
