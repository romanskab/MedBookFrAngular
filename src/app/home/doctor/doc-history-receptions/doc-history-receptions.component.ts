import {Component, OnInit} from '@angular/core';
import {DoctorService} from '../../../services/doctor.service';
import {Doctor} from '../../../models/Doctor';
import {VisitToDoctor} from '../../../models/VisitToDoctor';

@Component({
  selector: 'app-doc-history-receptions',
  templateUrl: './doc-history-receptions.component.html',
  styleUrls: ['./doc-history-receptions.component.css']
})
export class DocHistoryReceptionsComponent implements OnInit {
  visits: VisitToDoctor[] = [];

  constructor(private doctorService: DoctorService) {
  }

  ngOnInit() {
    this.doctorService.currentDoctorSubject.subscribe(value => {
      this.getVisits(value.id);
    });
  }

  getVisits(doctorId) {
    this.doctorService.getVisitsByDoctorId(doctorId).subscribe(value => {
      console.log(value);
      this.visits = value;
    });
  }

}
