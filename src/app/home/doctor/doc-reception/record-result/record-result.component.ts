import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DoctorService} from '../../../../services/doctor.service';
import {VisitToDoctor} from '../../../../models/VisitToDoctor';

@Component({
  selector: 'app-record-result',
  templateUrl: './record-result.component.html',
  styleUrls: ['./record-result.component.css']
})
export class RecordResultComponent implements OnInit {
  patientId;
  currentDoctor;

  visitToDoctor: VisitToDoctor = new VisitToDoctor();

  constructor(private activatedRoute: ActivatedRoute,
              private doctorService: DoctorService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.doctorService.currentDoctorSubject.subscribe(value => {
      this.currentDoctor = value;
    });
    this.doctorService.patientOnReception.subscribe(value => {
      this.patientId = value.id;
    });

    // this.activatedRoute.queryParams.subscribe(value => {
    //   this.patientId = value.id;
    //   console.log(this.patientId);
    // });
  }

  record() {
    this.doctorService.saveVisitToDoctor(this.visitToDoctor, this.currentDoctor.id, this.patientId).subscribe(value => {
      console.log(value);
      this.router.navigate(['doctor', 'reception', 'historyVisits']);
    });
  }
}
