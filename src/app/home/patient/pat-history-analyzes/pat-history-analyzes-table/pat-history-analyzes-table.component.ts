import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material';

@Component({
  selector: 'app-pat-history-analyzes-table',
  templateUrl: './pat-history-analyzes-table.component.html',
  styleUrls: ['./pat-history-analyzes-table.component.css']
})
export class PatHistoryAnalyzesTableComponent implements OnInit {
  @Input() analyzes;
  displayedColumns: string[] = ['date', 'name', 'result', 'unit'];
  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.analyzes);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
