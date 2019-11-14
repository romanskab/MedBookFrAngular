import {Component, OnInit, ViewChild} from '@angular/core';
import {Visit} from '../../../models/Visit';
import {DoctorService} from '../../../services/doctor.service';
import {ElementTableVisits} from '../../../models/modelsForTables/ElementTableVisits';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ElementTableDoctorsCalendar} from '../../../models/modelsForTables/ElementTableDoctorsCalendar';

@Component({
  selector: 'app-doc-work-calendar',
  templateUrl: './doc-work-calendar.component.html',
  styleUrls: ['./doc-work-calendar.component.css']
})
export class DocWorkCalendarComponent implements OnInit {
  isButtonForCreate;
  isCreate;
  visits: Visit[] = [];

  date;
  times: string[] = [];
  doctorId;

  visitsForTable: ElementTableDoctorsCalendar[] = [];
  displayedColumns: string[] = ['date', 'time', 'patient'];
  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private doctorService: DoctorService) {
  }

  ngOnInit() {
    this.hideCreate();
    this.doctorService.currentDoctorSubject.subscribe(value => {
      console.log(value.id);
      this.doctorId = value.id;
      this.doctorService.getFutureVisits(value.id).subscribe(value1 => {
        this.visitsForTable = [];
        console.log(value1);
        this.visits = value1;
        for (const visit of this.visits) {
          const elem: ElementTableDoctorsCalendar = new ElementTableDoctorsCalendar();
          elem.date = visit.date;
          elem.time = visit.time;
          if (visit.patient == null) {
            elem.surname = '';
            elem.name = '';
          } else {
            elem.surname = visit.patient.surname;
            elem.name = visit.patient.name;
          }
          this.visitsForTable.push(elem);
        }
        console.log(this.visitsForTable);
        this.dataSource = new MatTableDataSource(this.visitsForTable);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
  }

  toCreate() {
    this.isCreate = true;
    this.isButtonForCreate = false;
  }

  hideCreate() {
    this.isButtonForCreate = true;
    this.isCreate = false;
  }

  addWorkTimes() {
    console.log(this.date);
    console.log(this.times);
    console.log(this.doctorId);
    this.doctorService.addWorkTimes(this.doctorId, this.date, this.times).subscribe(value => {
      console.log(value);
      this.visitsForTable = [];
      this.ngOnInit();
    });
    this.times = null;
    this.date = null;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
