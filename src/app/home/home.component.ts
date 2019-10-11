import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.userService.getCurrentRole().subscribe(value => {
        if (value === 'ROLE_PATIENT') {
          this.router.navigate(['patient']);
        }
        if (value === 'ROLE_DOCTOR') {
          this.router.navigate(['doctor']);
        }
        if (value === 'ROLE_LABORATORY') {
          this.router.navigate(['laboratory']);
        }
      });
    } else {
      this.router.navigate(['auth', 'login']);
    }

  }
}
