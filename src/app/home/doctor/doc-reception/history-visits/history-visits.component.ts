import {Component, OnInit} from '@angular/core';
import {DoctorService} from '../../../../services/doctor.service';
import {VisitToDoctor} from '../../../../models/VisitToDoctor';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-history-visits',
  templateUrl: './history-visits.component.html',
  styleUrls: ['./history-visits.component.css']
})
export class HistoryVisitsComponent implements OnInit {

  patientId;
  visitsToDoctors: VisitToDoctor[] = [];

  constructor(private doctorService: DoctorService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.doctorService.patientOnReception.subscribe(value => {
      this.patientId = value.id;
    });
    // this.activatedRoute.queryParams.subscribe(value => {
    //   this.patientId = value.id;
    // });
    this.doctorService.getVisitToDoctorByPatientId(this.patientId).subscribe(value => {
      this.visitsToDoctors = value;
      console.log(this.visitsToDoctors);
    });
  }

}
