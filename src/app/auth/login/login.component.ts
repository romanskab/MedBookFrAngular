import {Component, Input, OnInit} from '@angular/core';
import {Login} from '../../models/Login';
import {ThemePalette} from '@angular/material';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input()
  color: ThemePalette;

  userLog: Login = new Login();
  isError = false;

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.isError = false;
    this.loginService.login(this.userLog).subscribe(value => {
      localStorage.setItem('token', value.headers.get('Authorization'));
      this.router.navigate(['']);
    }, error1 => {
      this.isError = true;
    });
  }

  register() {
    this.router.navigate(['auth/register/patient']);
  }
}
