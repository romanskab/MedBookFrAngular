import {Component, OnInit} from '@angular/core';
import {DoctorService} from '../../../services/doctor.service';
import {PatientService} from '../../../services/patient.service';
import {Doctor} from '../../../models/Doctor';

@Component({
  selector: 'app-pat-record-to-doctor',
  templateUrl: './pat-record-to-doctor.component.html',
  styleUrls: ['./pat-record-to-doctor.component.css']
})
export class PatRecordToDoctorComponent implements OnInit {
  specialities;
  speciality;

  doctors: Doctor[];
  doctor: Doctor;

  constructor(private doctorService: DoctorService,
              private patientService: PatientService) {
  }

  ngOnInit() {
    this.doctorService.getSpecialities().subscribe(value => {
      this.specialities = value;
    });
  }

  getDoctorsBySpecialize() {
    this.patientService.getDoctorsBySpeciality(this.speciality).subscribe(value => {
      console.log(value);
      this.doctors = value;
      console.log(this.doctors);
    });
  }

}
