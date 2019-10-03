import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Doctor} from '../models/Doctor';
import {Patient} from '../models/Patient';
import {BehaviorSubject, Observable} from 'rxjs';
import {VisitToDoctor} from '../models/VisitToDoctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  URLGetSpecialities = 'http://localhost:8080/specialities';
  URLSaveDoctor = 'http://localhost:8080/save/doctor';
  URLCurrent = 'http://localhost:8080/doctor/current';
  URLFindPatientByUsername = 'http://localhost:8080/doctor/findPatientByUsername';
  URLSaveVisitToDoctor = 'http://localhost:8080/doctor/saveVisitToDoctor';
  URLGetVisitToDoctorByPatientId = 'http://localhost:8080/doctor/getVisitsToDoctorByPatientId';

  // @ts-ignore
  currentDoctorSubject = new BehaviorSubject();
  // @ts-ignore
  patientOnReception = new BehaviorSubject();

  constructor(private http: HttpClient) {
  }

  getSpecialities(): Observable<string[]> {
    return this.http.get<string[]>(this.URLGetSpecialities, {observe: 'body'});
  }

  save(doctor: Doctor) {
    return this.http.post<Doctor>(this.URLSaveDoctor, doctor);
  }

  getCurrentDoctor(): Observable<Doctor> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.get(this.URLCurrent, {headers});
  }

  findPatientByUsername(username): Observable<Patient> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.post(this.URLFindPatientByUsername, username, {headers});
  }

  saveVisitToDoctor(visitToDoctor, doctorId, patientId) {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLSaveVisitToDoctor + `/${doctorId}` + `/${patientId}`;
    return this.http.post(URL, visitToDoctor, {headers});
  }

  getVisitToDoctorByPatientId(id): Observable<VisitToDoctor[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLGetVisitToDoctorByPatientId + `/${id}`;
    return this.http.get<VisitToDoctor[]>(URL, {headers});
  }
}
