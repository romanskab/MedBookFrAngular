import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getCurrentRole() {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.get('http://localhost:8080/user/currentRole', {headers, responseType: 'text'});
  }

  getCurrentUser() {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.get('http://localhost:8080/user/current', {headers});
  }

  savePhoto(file) {
    return this.http.post('http://localhost:8080/save/user/photo', file);
  }

}
