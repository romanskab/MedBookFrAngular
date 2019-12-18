import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from './config.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
              private config: ConfigService) {
  }

  private userURL = this.config.api + '/user';
  private saveURL = this.config.api + '/save';

  getCurrentRole() {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.get(`${this.userURL}/currentRole`, {headers, responseType: 'text'});
  }

  getCurrentUser() {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.get(`${this.userURL}/current`, {headers});
  }

  savePhoto(file) {
    return this.http.post(`${this.saveURL}/user/photo`, file);
  }

}
