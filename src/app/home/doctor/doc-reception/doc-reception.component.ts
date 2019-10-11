import {Component, OnInit} from '@angular/core';
import {DoctorService} from '../../../services/doctor.service';
import {Router} from '@angular/router';
import {Visit} from '../../../models/Visit';

@Component({
  selector: 'app-doc-reception',
  templateUrl: './doc-reception.component.html',
  styleUrls: ['./doc-reception.component.css']
})
export class DocReceptionComponent implements OnInit {
  visitsToday: Visit[];
  visit: Visit;

  constructor(private doctorService: DoctorService,
              private router: Router) {
  }

  ngOnInit() {
    this.visit = null;
    this.doctorService.currentDoctorSubject.subscribe(doctor => {
      this.doctorService.getFutureTodayVisits(doctor.id).subscribe(value1 => {
        this.visitsToday = value1;
        console.log(this.visitsToday);
      });
    });
  }

  toHistoryVisits() {
    this.router.navigate(['doctor', 'reception', 'historyVisits']);
  }

  toHistoryAnalyzes() {
    this.router.navigate(['doctor', 'reception', 'historyAnalyzes']);
  }

  toRecordResult() {
    this.router.navigate(['doctor', 'reception', 'recordResult']);
  }

  toRecordIndicators() {
    this.router.navigate(['doctor', 'reception', 'recordIndicators']);
  }

  saveCurrentVisit() {
    this.doctorService.currentVisitSubject.next(this.visit);
    this.toHistoryVisits();
  }
}
