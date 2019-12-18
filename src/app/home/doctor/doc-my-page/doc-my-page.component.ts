import {Component, OnInit} from '@angular/core';
import {Doctor} from '../../../models/Doctor';
import {DoctorService} from '../../../services/doctor.service';
import {Visit} from '../../../models/Visit';
import {Gender} from '../../../models/Gender';
import {ConfigService} from '../../../services/config.service';

@Component({
  selector: 'app-doc-my-page',
  templateUrl: './doc-my-page.component.html',
  styleUrls: ['./doc-my-page.component.css']
})
export class DocMyPageComponent implements OnInit {
  currentDoctor: Doctor;
  lastVisit: Visit;
  nextVisit: Visit;

  pathToImage;

  constructor(private doctorService: DoctorService,
              private configService: ConfigService) {
  }

  ngOnInit() {
    this.doctorService.getCurrentDoctor().subscribe(value => {
      this.doctorService.currentDoctorSubject.next(value);
      this.currentDoctor = value;
      console.log(this.currentDoctor);

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
