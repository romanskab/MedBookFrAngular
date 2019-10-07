import {Component, OnInit} from '@angular/core';
import {DoctorService} from '../../../services/doctor.service';
import {PatientService} from '../../../services/patient.service';
import {Doctor} from '../../../models/Doctor';
import {CalendarOfVisits} from '../../../models/CalendarOfVisits';
import {Patient} from '../../../models/Patient';

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

  calendar: CalendarOfVisits[];
  recordInCalendar: CalendarOfVisits;

  days: Date[] = [];
  day;

  constructor(private doctorService: DoctorService,
              private patientService: PatientService) {
  }

  ngOnInit() {
    this.doctorService.getSpecialities().subscribe(value => {
      this.specialities = value;
    });
    this.patientService.currentPatientSubject.subscribe(value => {
      this.currentPatient = value;
    });
  }

  getDoctorsBySpecialize() {
    this.patientService.getDoctorsBySpeciality(this.speciality).subscribe(value => {
      this.doctors = value;
    });
  }

  getFreeDaysToDoctor() {
    this.patientService.getFreeTimeToDoctor(this.doctor.id).subscribe(value => {
        this.calendar = value;
        this.calendar.forEach(value1 => {
          if (this.days.indexOf(value1.date) === -1) {
            this.days.push(value1.date);
          }
        });
      }
    );
  }

  getFreeTimeToDoctor() {
    const arr: CalendarOfVisits[] = [];
    for (const calendarElement of this.calendar) {
      if (calendarElement.date === this.day) {
        arr.push(calendarElement);
      }
    }
    this.calendar = arr;
    console.log(this.calendar);
  }

  saveRecordInCalendar() {
    this.patientService.saveRecordInCalendar(this.recordInCalendar.id, this.currentPatient.id).subscribe(value => {
      console.log(value);
    });
  }
}
