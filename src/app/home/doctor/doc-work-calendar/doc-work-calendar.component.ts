import {Component, OnInit} from '@angular/core';
import {Visit} from '../../../models/Visit';
import {DoctorService} from '../../../services/doctor.service';

@Component({
  selector: 'app-doc-work-calendar',
  templateUrl: './doc-work-calendar.component.html',
  styleUrls: ['./doc-work-calendar.component.css']
})
export class DocWorkCalendarComponent implements OnInit {
  isButtonForCreate;
  isCreate;
  visits: Visit[];

  date;
  times: string[] = [];
  doctorId;

  constructor(private doctorService: DoctorService) {
  }

  ngOnInit() {
    this.hideCreate();
    this.doctorService.currentDoctorSubject.subscribe(value => {
      console.log(value.id);
      this.doctorId = value.id;
      this.doctorService.getVisitsByDoctorId(value.id).subscribe(value1 => {
        console.log(value1);
        this.visits = value1;
      });
    });
  }

  toCreate() {
    this.isCreate = true;
    this.isButtonForCreate = false;
  }

  hideCreate() {
    this.isButtonForCreate = true;
    this.isCreate = false;
  }

  addWorkTimes() {
    console.log(this.date);
    console.log(this.times);
    console.log(this.doctorId);
    this.doctorService.addWorkTimes(this.doctorId, this.date, this.times).subscribe(value => {
      console.log(value);
    });
    this.times = null;
    this.date = null;
  }
}
