import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Doctor} from '../models/Doctor';
import {Patient} from '../models/Patient';
import {Observable} from 'rxjs';
import {VisitToDoctor} from '../models/VisitToDoctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  URLSaveDoctor = 'http://localhost:8080/save/doctor';
  URLDoctorCurrent = 'http://localhost:8080/doctor/current';
  URLDoctorFindPatientByUsername = 'http://localhost:8080/doctor/findPatientByUsername';
  URLDoctorSaveVisitToDoctor = 'http://localhost:8080/doctor/saveVisitToDoctor';
  URLDoctorGetVisitToDoctorByPatientId = 'http://localhost:8080/doctor/getVisitToDoctorByPatientId';

  constructor(private http: HttpClient) {
  }

  save(doctor: Doctor) {
    return this.http.post<Doctor>(this.URLSaveDoctor, doctor);
  }

  getCurrentDoctor(): Observable<Doctor> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.get(this.URLDoctorCurrent, {headers});
  }

  findPatientByUsername(username): Observable<Patient> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.post(this.URLDoctorFindPatientByUsername, username, {headers});
  }

  saveVisitToDoctor(visitToDoctor) {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.post(this.URLDoctorSaveVisitToDoctor, visitToDoctor, {headers});
  }

  getVisitToDoctorByPatientId(id): Observable<VisitToDoctor[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLDoctorGetVisitToDoctorByPatientId + `/${id}`;
    return this.http.get<VisitToDoctor[]>(URL, {headers});
  }
}
