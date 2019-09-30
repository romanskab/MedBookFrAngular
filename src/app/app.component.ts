import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.userService.getCurrentRole().subscribe(value => {
        if (value === 'ROLE_PATIENT') {
          this.router.navigate(['/patient']);
        }
        if (value === 'ROLE_DOCTOR') {
          this.router.navigate(['/doctor']);
        }
        if (value === 'ROLE_LABORATORY') {
          this.router.navigate(['/laboratory']);
        }
      });
    } else {
      this.router.navigate(['/auth/login']);
    }
  }
}
