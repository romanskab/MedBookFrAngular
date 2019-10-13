import {Component, OnInit} from '@angular/core';
import {Doctor} from '../../../models/Doctor';
import {PatientService} from '../../../services/patient.service';
import {DoctorService} from '../../../services/doctor.service';
import {Visit} from '../../../models/Visit';

@Component({
  selector: 'app-doc-my-page',
  templateUrl: './doc-my-page.component.html',
  styleUrls: ['./doc-my-page.component.css']
})
export class DocMyPageComponent implements OnInit {
  currentDoctor: Doctor;
  lastVisit: Visit;
  nextVisit: Visit;

  constructor(private doctorService: DoctorService) {
  }

  ngOnInit() {
    this.doctorService.getCurrentDoctor().subscribe(value => {
      this.doctorService.currentDoctorSubject.next(value);
      this.currentDoctor = value;

      this.doctorService.getNextVisit(this.currentDoctor.id).subscribe(value1 => {
        console.log(value1);
        this.nextVisit = value1;
      });

      this.doctorService.getLastVisit(this.currentDoctor.id).subscribe(value1 => {
        console.log('last visit:');
        console.log(value1);
        this.lastVisit = value1;
      });
    });
  }

}
