import {Component, OnInit, ViewChild} from '@angular/core';
import {DoctorService} from '../../../services/doctor.service';
import {Visit} from '../../../models/Visit';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ElementTableDoctorsVisit} from '../../../models/modelsForTables/ElementTableDoctorsVisit';

@Component({
  selector: 'app-doc-history-receptions',
  templateUrl: './doc-history-receptions.component.html',
  styleUrls: ['./doc-history-receptions.component.css']
})
export class DocHistoryReceptionsComponent implements OnInit {
  visits: Visit[] = [];
  visitsForTable: ElementTableDoctorsVisit[] = [];
  displayedColumns: string[] = ['date', 'patient', 'conclusion'];
  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private doctorService: DoctorService) {
  }

  ngOnInit() {
    this.doctorService.currentDoctorSubject.subscribe(value => {
      this.getVisits(value.id);
    });
  }

  getVisits(doctorId) {
    this.doctorService.getFinishedVisitsByDoctorId(doctorId).subscribe(value => {
      console.log(value);
      this.visits = value;
      for (const visit of this.visits) {
        const elem: ElementTableDoctorsVisit = new ElementTableDoctorsVisit();
        elem.date = visit.date;
        elem.surname = visit.patient.surname;
        elem.name = visit.patient.name;
        elem.conclusion = visit.conclusion;
        this.visitsForTable.push(elem);
      }
      console.log(this.visitsForTable);
      this.dataSource = new MatTableDataSource(this.visitsForTable);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
