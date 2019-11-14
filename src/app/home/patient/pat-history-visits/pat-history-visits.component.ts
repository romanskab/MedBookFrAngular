import {Component, OnInit, ViewChild} from '@angular/core';
import {PatientService} from '../../../services/patient.service';
import {Visit} from '../../../models/Visit';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ElementTableVisits} from '../../../models/modelsForTables/ElementTableVisits';

@Component({
  selector: 'app-pat-history-visits',
  templateUrl: './pat-history-visits.component.html',
  styleUrls: ['./pat-history-visits.component.css']
})
export class PatHistoryVisitsComponent implements OnInit {

  visits: Visit[] = [];
  visitsForTable: ElementTableVisits[] = [];
  displayedColumns: string[] = ['date', 'speciality', 'doctor', 'conclusion'];
  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private patientService: PatientService) {
  }

  ngOnInit() {
    this.patientService.currentPatientSubject.subscribe(value => {
      this.patientService.getAllFinishedVisits(value.id).subscribe(value1 => {
        this.visits = value1;
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
    });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
