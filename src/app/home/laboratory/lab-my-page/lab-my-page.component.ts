import {Component, OnInit} from '@angular/core';
import {Laboratory} from '../../../models/Laboratory';
import {LaboratoryService} from '../../../services/laboratory.service';
import {ConfigService} from '../../../services/config.service';

@Component({
  selector: 'app-lab-my-page',
  templateUrl: './lab-my-page.component.html',
  styleUrls: ['./lab-my-page.component.css']
})
export class LabMyPageComponent implements OnInit {
  currentLaboratory: Laboratory;
  pathToImage;

  constructor(private laboratoryService: LaboratoryService,
              private configService: ConfigService) {
  }

  ngOnInit() {
    this.laboratoryService.getCurrentLaboratory().subscribe(value => {
      this.currentLaboratory = value;

      if (this.currentLaboratory.image === null) {
        this.pathToImage = 'assets/images/photo_lab_default.jpg';
      } else {
        this.pathToImage = this.configService.api + '/images/' + this.currentLaboratory.image;
      }

      this.laboratoryService.currentLaboratorySubject.next(value);
    });
  }

}
