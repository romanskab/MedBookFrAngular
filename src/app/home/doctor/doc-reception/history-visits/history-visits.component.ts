import {Component, OnInit, ViewChild} from '@angular/core';
import {DoctorService} from '../../../../services/doctor.service';
import {Visit} from '../../../../models/Visit';
import {ElementTableDoctorsVisit} from '../../../../models/modelsForTables/ElementTableDoctorsVisit';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ElementTableVisits} from '../../../../models/modelsForTables/ElementTableVisits';

@Component({
  selector: 'app-history-visits',
  templateUrl: './history-visits.component.html',
  styleUrls: ['./history-visits.component.css']
})
export class HistoryVisitsComponent implements OnInit {

  patientId;
  visits: Visit[] = [];
  visitsForTable: ElementTableVisits[] = [];
  displayedColumns: string[] = ['date', 'speciality', 'doctor', 'conclusion'];
  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private doctorService: DoctorService) {
  }

  ngOnInit() {
    this.doctorService.currentVisitSubject.subscribe(value => {
      this.patientId = value.patient.id;
    });
    this.doctorService.getFinishedVisitsByPatientId(this.patientId).subscribe(value => {
      this.visits = value;
      console.log(this.visits);
      for (const visit of this.visits) {
        const elem: ElementTableVisits = new ElementTableVisits();
        elem.date = visit.date;
        elem.speciality = visit.doctor.speciality;
        elem.surname = visit.doctor.surname;
        elem.name = visit.doctor.name;
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
