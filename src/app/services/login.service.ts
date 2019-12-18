import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../models/Login';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
              private config: ConfigService) {
  }

  baseURL = this.config.api;

  login(user: Login) {
    console.log(user);
    return this.http.post(`${this.baseURL}/login`, user, {observe: 'response'});
  }
}
