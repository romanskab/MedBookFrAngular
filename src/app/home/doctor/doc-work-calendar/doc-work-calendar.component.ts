import { Component, OnInit } from '@angular/core';
import {CalendarOfVisits} from '../../../models/CalendarOfVisits';

@Component({
  selector: 'app-doc-work-calendar',
  templateUrl: './doc-work-calendar.component.html',
  styleUrls: ['./doc-work-calendar.component.css']
})
export class DocWorkCalendarComponent implements OnInit {
  calendarOfVisits: CalendarOfVisits = new CalendarOfVisits();
  times: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  create() {

  }
}
