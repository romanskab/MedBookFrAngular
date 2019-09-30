import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(user: Login) {
    console.log(user);
    return this.http.post('http://localhost:8080/login', user, {observe: 'response'});
  }
}
