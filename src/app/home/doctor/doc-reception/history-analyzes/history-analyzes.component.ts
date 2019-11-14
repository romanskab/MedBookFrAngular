import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DoctorService} from '../../../../services/doctor.service';
import {Patient} from '../../../../models/Patient';
import {TestResult} from '../../../../models/TestResult';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material';
import {ElementTableAnalyzes} from '../../../../models/modelsForTables/ElementTableAnalyzes';

@Component({
  selector: 'app-history-analyzes',
  templateUrl: './history-analyzes.component.html',
  styleUrls: ['./history-analyzes.component.css']
})
export class HistoryAnalyzesComponent implements OnInit {

  // testResults: TestResult[];
  // constructor(private doctorService: DoctorService) {
  // }
  // ngOnInit() {
  //   this.doctorService.currentVisitSubject.subscribe(value => {
  //     console.log(value);
  //     this.doctorService.getTestResults(value.patient.id).subscribe(value1 => {
  //       console.log(value1);
  //       this.testResults = value1;
  //     });
  //   });
  // }

  testResults;
  analyzes = [];
  displayedColumns: string[] = ['date', 'name', 'result'];
  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private doctorService: DoctorService) {
  }

  ngOnInit() {
    this.doctorService.currentVisitSubject.subscribe(value => {
      this.doctorService.getTestResults(value.patient.id).subscribe(value1 => {
        this.testResults = value1;
        for (const testResult of this.testResults) {
          const elem: ElementTableAnalyzes = new ElementTableAnalyzes();
          elem.date = testResult.date;
          elem.name = testResult.test.title;
          elem.result = testResult.result;
          elem.unit = testResult.test.unit;
          this.analyzes.push(elem);
        }
        console.log(this.analyzes);
        this.dataSource = new MatTableDataSource(this.analyzes);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
