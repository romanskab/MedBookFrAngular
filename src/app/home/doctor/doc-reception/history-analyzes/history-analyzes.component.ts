import {Component, OnInit} from '@angular/core';
import {DoctorService} from '../../../../services/doctor.service';
import {Patient} from '../../../../models/Patient';
import {TestResult} from '../../../../models/TestResult';

@Component({
  selector: 'app-history-analyzes',
  templateUrl: './history-analyzes.component.html',
  styleUrls: ['./history-analyzes.component.css']
})
export class HistoryAnalyzesComponent implements OnInit {

  testResults: TestResult[];

  constructor(private doctorService: DoctorService) {
  }

  ngOnInit() {
    this.doctorService.currentVisitSubject.subscribe(value => {
      console.log(value);
      this.doctorService.getTestResults(value.patient.id).subscribe(value1 => {
        console.log(value1);
        this.testResults = value1;
      });
    });
  }

}
