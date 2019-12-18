import {Component, OnInit} from '@angular/core';
import {DoctorService} from '../../../services/doctor.service';
import {Router} from '@angular/router';
import {Visit} from '../../../models/Visit';
import {ConfigService} from '../../../services/config.service';

@Component({
  selector: 'app-doc-reception',
  templateUrl: './doc-reception.component.html',
  styleUrls: ['./doc-reception.component.css']
})
export class DocReceptionComponent implements OnInit {
  visitsToday: Visit[];
  visit: Visit;
  pathToPatientImage;

  constructor(private doctorService: DoctorService,
              private router: Router,
              private configService: ConfigService) {
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
    if (this.visit.patient.image === null) {
      this.pathToPatientImage = 'assets/images/photo_patient_default.jpg';
    } else {
      this.pathToPatientImage = this.configService.api + '/images/' + this.visit.patient.image;
    }
    this.toHistoryVisits();
  }
}
