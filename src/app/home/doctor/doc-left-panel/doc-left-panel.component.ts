import {Component, OnInit} from '@angular/core';
import {Doctor} from '../../../models/Doctor';
import {DoctorService} from '../../../services/doctor.service';

@Component({
  selector: 'app-doc-left-panel',
  templateUrl: './doc-left-panel.component.html',
  styleUrls: ['./doc-left-panel.component.css']
})
export class DocLeftPanelComponent implements OnInit {
  currentDoctor: Doctor;

  constructor(private doctorService: DoctorService) {
  }

  ngOnInit() {
    this.doctorService.getCurrentDoctor().subscribe(value => {
      this.currentDoctor = value;
    });
  }

}
