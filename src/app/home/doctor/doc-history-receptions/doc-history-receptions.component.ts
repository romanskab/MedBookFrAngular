import {Component, OnInit} from '@angular/core';
import {DoctorService} from '../../../services/doctor.service';
import {Visit} from '../../../models/Visit';

@Component({
  selector: 'app-doc-history-receptions',
  templateUrl: './doc-history-receptions.component.html',
  styleUrls: ['./doc-history-receptions.component.css']
})
export class DocHistoryReceptionsComponent implements OnInit {
  visits: Visit[];

  constructor(private doctorService: DoctorService) {
  }

  ngOnInit() {
    this.doctorService.currentDoctorSubject.subscribe(value => {
      this.getVisits(value.id);
    });
  }

  getVisits(doctorId) {
    this.doctorService.getFinishedVisitsByDoctorId(doctorId).subscribe(value => {
      console.log(value);
      this.visits = value;
    });
  }

}
