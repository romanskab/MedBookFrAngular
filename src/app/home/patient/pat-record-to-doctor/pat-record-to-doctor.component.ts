import {Component, OnInit} from '@angular/core';
import {DoctorService} from '../../../services/doctor.service';
import {PatientService} from '../../../services/patient.service';
import {Doctor} from '../../../models/Doctor';
import {Patient} from '../../../models/Patient';
import {Visit} from '../../../models/Visit';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pat-record-to-doctor',
  templateUrl: './pat-record-to-doctor.component.html',
  styleUrls: ['./pat-record-to-doctor.component.css']
})
export class PatRecordToDoctorComponent implements OnInit {
  currentPatient: Patient;

  specialities;
  speciality;

  doctors: Doctor[];
  doctor: Doctor;

  freeVisits: Visit[];

  freeDays: Date[] = [];
  day;

  freeVisitsInSelectedDay: Visit[] = [];
  selectedVisit: Visit;

  isError = false;
  isSuccess = false;

  constructor(private doctorService: DoctorService,
              private patientService: PatientService,
              private router: Router) {
  }

  ngOnInit() {
    this.patientService.currentPatientSubject.subscribe(value => {
      this.currentPatient = value;
      this.doctorService.getSpecialities().subscribe(value1 => {
        this.specialities = value1;
      });
    });
  }

  getDoctorsBySpecialize() {
    this.patientService.getDoctorsBySpeciality(this.speciality).subscribe(value => {
      this.doctors = value;
    });
  }

  getFreeDaysToDoctor() {
    this.patientService.getFreeVisitToDoctor(this.doctor.id).subscribe(value => {
        this.freeVisits = value;
        this.freeVisits.forEach(value1 => {
          if (this.freeDays.indexOf(value1.date) === -1) {
            this.freeDays.push(value1.date);
          }
        });
        console.log(this.freeDays);
      }
    );
  }

  getFreeVisitsInSelectedDay() {
    for (const visit of this.freeVisits) {
      if (visit.date === this.day) {
        this.freeVisitsInSelectedDay.push(visit);
      }
    }
  }

  recordToDoctor() {
    this.isError = false;
    this.patientService.recordToDoctor(this.selectedVisit.id, this.currentPatient.id).subscribe(value => {
      console.log(value);
      this.navigateToExitWithTimeout();
    }, error1 => {
      this.isError = true;
    });
  }

  navigateToExitWithTimeout() {
    this.isSuccess = true;
    setTimeout(() => {
      this.router.navigate(['']);
    }, 2500);
  }

}
