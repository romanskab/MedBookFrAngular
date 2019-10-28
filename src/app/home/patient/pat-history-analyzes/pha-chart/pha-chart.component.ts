import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../../../services/patient.service';
import {ActivatedRoute} from '@angular/router';
import {Patient} from '../../../../models/Patient';
import {TestResult} from '../../../../models/TestResult';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-pha-chart',
  templateUrl: './pha-chart.component.html',
  styleUrls: ['./pha-chart.component.css']
})
export class PhaChartComponent implements OnInit {
  currentPatient: Patient;
  title;
  testResults: TestResult[];

  days = [];
  results = [];
  myChart;

  constructor(private patientService: PatientService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.patientService.currentPatientSubject.subscribe(value => {
      this.currentPatient = value;
      console.log(this.currentPatient);
      this.activatedRoute.params.subscribe(value1 => {
        this.title = value1.title;
        console.log(this.title);
        this.patientService.getAllTestsByTitleAndPatient(this.currentPatient.id, this.title).subscribe(value2 => {
          this.testResults = value2;
          console.log(this.testResults);
          this.days = [];
          this.results = [];
          for (const testResult of this.testResults) {
            this.days.push(testResult.date);
            this.results.push(testResult.result);
          }
          this.showChart();
        });
      });
    });

  }

  showChart() {
    let ctx;
    ctx = document.getElementById('myChart');
    ctx = ctx.getContext('2d');

    this.myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.days,
        datasets: [{
          label: this.title,
          data: this.results,
          backgroundColor: 'blue',
          borderColor: ['black']
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
