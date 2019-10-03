import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DoctorService} from '../../../services/doctor.service';
import {Patient} from '../../../models/Patient';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-doc-reception',
  templateUrl: './doc-reception.component.html',
  styleUrls: ['./doc-reception.component.css']
})
export class DocReceptionComponent implements OnInit {
  patient: Patient;

  constructor(private doctorService: DoctorService,
              private router: Router) {
  }

  ngOnInit() {
    if (this.patient != null) {
      this.toHistoryVisits();
    }
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
    this.router.navigate(['doctor', 'reception', 'historyAnalyzes'], {queryParams: {id: this.patient.id}});
  }

  toRecordResult() {
    this.router.navigate(['doctor', 'reception', 'recordResult']);
  }

  toRecordIndicators() {
    this.router.navigate(['doctor', 'reception', 'recordIndicators'], {queryParams: {id: this.patient.id}});
  }
}
