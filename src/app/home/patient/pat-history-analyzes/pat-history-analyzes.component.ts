// import {Component, OnInit, ViewChild} from '@angular/core';
// import {PatientService} from '../../../services/patient.service';
// import {TestResult} from '../../../models/TestResult';
// import {MatPaginator} from '@angular/material/paginator';
// import {MatTableDataSource} from '@angular/material/table';
//
// @Component({
//   selector: 'app-pat-history-analyzes',
//   templateUrl: './pat-history-analyzes.component.html',
//   styleUrls: ['./pat-history-analyzes.component.css']
// })
// export class PatHistoryAnalyzesComponent implements OnInit {
//   displayedColumns: string[] = ['date', 'name', 'result', 'unit'];
//   // dataSource: TestResult[] = [];
//   private dataSource: MatTableDataSource<any>;
//   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
//
//   constructor(private patientService: PatientService) {
//   }
//
//   ngOnInit() {
//     setTimeout(() => {
//       this.patientService.currentPatientSubject.subscribe(value => {
//         console.log(value);
//         this.patientService.getAllTestResults(value.id).subscribe(value1 => {
//           console.log(value1);
//           const resultList = value1.map(item => {
//             return {
//               ...item
//             };
//           });
//           this.dataSource = new MatTableDataSource(value1);
//           this.dataSource.paginator = this.paginator;
//           console.log(this.dataSource);
//
//         });
//       });
//     }, 100);
//
//   }
//
// }
import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../../services/patient.service';
import {TestResult} from '../../../models/TestResult';
import {ElementTableAnalyzes} from '../../../models/modelsForTables/ElementTableAnalyzes';

@Component({
  selector: 'app-pat-history-analyzes',
  templateUrl: './pat-history-analyzes.component.html',
  styleUrls: ['./pat-history-analyzes.component.css']
})
export class PatHistoryAnalyzesComponent implements OnInit {
  results: TestResult[];
  elements: ElementTableAnalyzes[] = [];

  constructor(private patientService: PatientService) {
  }

  ngOnInit() {
    this.patientService.currentPatientSubject.subscribe(value => {
      this.patientService.getAllTestResults(value.id).subscribe(value1 => {
        this.results = value1;
        for (const testResult of this.results) {
          const elem: ElementTableAnalyzes = new ElementTableAnalyzes();
          elem.date = testResult.date;
          elem.name = testResult.test.title;
          elem.result = testResult.result;
          elem.unit = testResult.test.unit;
          this.elements.push(elem);
        }
      });
    });
  }

}

