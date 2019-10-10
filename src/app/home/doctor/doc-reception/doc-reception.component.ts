import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DoctorService} from '../../../services/doctor.service';
import {Patient} from '../../../models/Patient';
import {Router} from '@angular/router';
import {VisitToDoctor} from '../../../models/VisitToDoctor';
import {CalendarOfVisits} from '../../../models/CalendarOfVisits';

@Component({
  selector: 'app-doc-reception',
  templateUrl: './doc-reception.component.html',
  styleUrls: ['./doc-reception.component.css']
})
export class DocReceptionComponent implements OnInit {
  visitsToday: CalendarOfVisits[];
  patient: Patient;

  constructor(private doctorService: DoctorService,
              private router: Router) {
  }

  ngOnInit() {
    if (this.patient != null) {
      this.toHistoryVisits();
    }
    this.doctorService.currentDoctorSubject.subscribe(doctor => {
      this.doctorService.getTodayVisits(doctor.id).subscribe(value1 => {
        console.log(value1);
        this.visitsToday = value1;
      });
    });
  }

  findPatient(form: NgForm) {
    this.doctorService.findPatientByUsername(form.value.username).subscribe(value => {
      this.patient = value;
      this.doctorService.patientOnReception.next(value);
      this.toHistoryVisits();
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
}
