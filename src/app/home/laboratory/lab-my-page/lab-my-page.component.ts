import {Component, OnInit} from '@angular/core';
import {Laboratory} from '../../../models/Laboratory';
import {LaboratoryService} from '../../../services/laboratory.service';

@Component({
  selector: 'app-lab-my-page',
  templateUrl: './lab-my-page.component.html',
  styleUrls: ['./lab-my-page.component.css']
})
export class LabMyPageComponent implements OnInit {
  currentLaboratory: Laboratory;

  constructor(private laboratoryService: LaboratoryService) {
  }

  ngOnInit() {
    this.laboratoryService.getCurrentLaboratory().subscribe(value => {
      this.currentLaboratory = value;
    });
  }

}
