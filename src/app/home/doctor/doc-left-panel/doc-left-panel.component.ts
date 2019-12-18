import {Component, OnInit} from '@angular/core';
import {Doctor} from '../../../models/Doctor';
import {DoctorService} from '../../../services/doctor.service';
import {Gender} from '../../../models/Gender';
import {ConfigService} from '../../../services/config.service';

@Component({
  selector: 'app-doc-left-panel',
  templateUrl: './doc-left-panel.component.html',
  styleUrls: ['./doc-left-panel.component.css']
})
export class DocLeftPanelComponent implements OnInit {
  currentDoctor: Doctor;

  pathToImage;

  constructor(private doctorService: DoctorService,
              private configService: ConfigService) {
  }

  ngOnInit() {
    this.doctorService.getCurrentDoctor().subscribe(value => {
      this.currentDoctor = value;

      if (this.currentDoctor.image === null) {
        if (this.currentDoctor.gender === Gender.MALE) {
          this.pathToImage = 'assets/images/photo_doctor_man.jpg';
        }
        if (this.currentDoctor.gender === Gender.FEMALE) {
          this.pathToImage = 'assets/images/photo_doctor_woman.jpg';
        }
      } else {
        this.pathToImage = this.configService.api + '/images/' + this.currentDoctor.image;
      }
    });
  }

}
