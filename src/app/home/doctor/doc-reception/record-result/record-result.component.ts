import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DoctorService} from '../../../../services/doctor.service';
import {Visit} from '../../../../models/Visit';

@Component({
  selector: 'app-record-result',
  templateUrl: './record-result.component.html',
  styleUrls: ['./record-result.component.css']
})
export class RecordResultComponent implements OnInit {
  currentVisit: Visit;
  conclusion;

  constructor(private activatedRoute: ActivatedRoute,
              private doctorService: DoctorService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.doctorService.currentVisitSubject.subscribe(value => {
      this.currentVisit = value;
    });
  }

  record() {
    this.doctorService.saveResultOfVisit(this.conclusion, this.currentVisit.id).subscribe(value => {
      console.log(value);
    });
  }
}
