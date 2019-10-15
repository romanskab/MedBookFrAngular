import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../../services/patient.service';
import {TestResult} from '../../../models/TestResult';

@Component({
  selector: 'app-pat-history-analyzes',
  templateUrl: './pat-history-analyzes.component.html',
  styleUrls: ['./pat-history-analyzes.component.css']
})
export class PatHistoryAnalyzesComponent implements OnInit {
  testResults: TestResult[];

  constructor(private patientService: PatientService) {
  }

  ngOnInit() {
    this.patientService.currentPatientSubject.subscribe(value => {
      console.log(value);
      this.patientService.getAllTestResults(value.id).subscribe(value1 => {
        console.log(value1);
        this.testResults = value1;
      });
    });
  }

}
