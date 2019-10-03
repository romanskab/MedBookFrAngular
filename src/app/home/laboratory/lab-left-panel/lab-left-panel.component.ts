import {Component, OnInit} from '@angular/core';
import {Laboratory} from '../../../models/Laboratory';
import {LaboratoryService} from '../../../services/laboratory.service';

@Component({
  selector: 'app-lab-left-panel',
  templateUrl: './lab-left-panel.component.html',
  styleUrls: ['./lab-left-panel.component.css']
})
export class LabLeftPanelComponent implements OnInit {
  currentLaboratory: Laboratory;

  constructor(private laboratoryService: LaboratoryService) {
  }

  ngOnInit() {
    this.laboratoryService.getCurrentLaboratory().subscribe(value => {
      this.currentLaboratory = value;
    });
  }

}
