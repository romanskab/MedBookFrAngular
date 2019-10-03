import {Component, OnInit} from '@angular/core';
import {Doctor} from '../../../models/Doctor';
import {PatientService} from '../../../services/patient.service';
import {DoctorService} from '../../../services/doctor.service';

@Component({
  selector: 'app-doc-my-page',
  templateUrl: './doc-my-page.component.html',
  styleUrls: ['./doc-my-page.component.css']
})
export class DocMyPageComponent implements OnInit {
  currentDoctor: Doctor;

  constructor(private doctorService: DoctorService) {
  }

  ngOnInit() {
    this.doctorService.getCurrentDoctor().subscribe(value => {
      this.doctorService.currentDoctorSubject.next(value);
      this.currentDoctor = value;
    });
  }

}
