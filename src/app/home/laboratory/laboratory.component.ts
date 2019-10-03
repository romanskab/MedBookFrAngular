import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.css']
})
export class LaboratoryComponent implements OnInit {

  isLeftPanel;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.toMyPage();
  }

  toMyPage() {
    this.router.navigate(['laboratory', 'myPage']);
    this.isLeftPanel = false;
  }

  toRecordResult() {
    this.router.navigate(['laboratory', 'recordResult']);
    this.isLeftPanel = true;
  }

  exit() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
