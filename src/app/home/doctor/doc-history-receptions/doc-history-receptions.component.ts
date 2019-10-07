import {Component, OnInit} from '@angular/core';
import {DoctorService} from '../../../services/doctor.service';
import {Doctor} from '../../../models/Doctor';

@Component({
  selector: 'app-doc-history-receptions',
  templateUrl: './doc-history-receptions.component.html',
  styleUrls: ['./doc-history-receptions.component.css']
})
export class DocHistoryReceptionsComponent implements OnInit {
  currentDoctor: Doctor;

  constructor(private doctorService: DoctorService) {
  }

  ngOnInit() {
    this.doctorService.currentDoctorSubject.subscribe(value => {
      this.currentDoctor = value;
      console.log(this.currentDoctor.id);

      this.doctorService.getVisitsByDoctorId(value.id).subscribe(value1 => {
        console.log(this.currentDoctor.id);
        console.log(value1);
      });
    });

  }

}
