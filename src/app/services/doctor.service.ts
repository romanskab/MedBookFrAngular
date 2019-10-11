import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Doctor} from '../models/Doctor';
import {Patient} from '../models/Patient';
import {BehaviorSubject, Observable} from 'rxjs';
import {Visit} from '../models/Visit';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private URLGetSpecialities = 'http://localhost:8080/specialities';
  private URLSaveDoctor = 'http://localhost:8080/save/doctor';
  private URLCurrent = 'http://localhost:8080/doctor/current';
  private URLGetPatientByUsername = 'http://localhost:8080/doctor/getPatientByUsername';
  private URLSaveResultOfVisit = 'http://localhost:8080/doctor/saveResultOfVisit';
  private URLGetVisitsByPatientId = 'http://localhost:8080/doctor/visitsByPatientId';
  private URLGetOldVisitsByPatientId = 'http://localhost:8080/doctor/oldVisitsByPatientId';
  private URLGetVisitsByDoctorId = 'http://localhost:8080/doctor/visitsByDoctorId';
  private URLGetOldVisitsByDoctorId = 'http://localhost:8080/doctor/oldVisitsByDoctorId';
  private URLAddWorkTimes = 'http://localhost:8080/doctor/addWorkTimes';
  private URLGetFutureTodayVisits = 'http://localhost:8080/doctor/futureTodayVisits';

  // @ts-ignore
  currentDoctorSubject = new BehaviorSubject();
  // @ts-ignore
  currentVisitSubject = new BehaviorSubject();

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
    return this.http.post(this.URLGetPatientByUsername, username, {headers});
  }

  saveResultOfVisit(conclusion, visitId) {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLSaveResultOfVisit + `/${visitId}`;
    return this.http.post(URL, conclusion, {headers});
  }

  getVisitsByPatientId(id): Observable<Visit[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLGetVisitsByPatientId + `/${id}`;
    return this.http.get<Visit[]>(URL, {headers});
  }

  getVisitsByDoctorId(id): Observable<Visit[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLGetVisitsByDoctorId + `/${id}`;
    return this.http.get<Visit[]>(URL, {headers});
  }

  getOldVisitsByDoctorId(id): Observable<Visit[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLGetOldVisitsByDoctorId + `/${id}`;
    return this.http.get<Visit[]>(URL, {headers});
  }

  getOldVisitsByPatientId(id): Observable<Visit[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLGetOldVisitsByPatientId + `/${id}`;
    return this.http.get<Visit[]>(URL, {headers});
  }

  addWorkTimes(doctorId, date, times) {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLAddWorkTimes + `/${doctorId}` + `/${date}`;
    return this.http.post(URL, times, {headers});
  }

  getFutureTodayVisits(doctorId): Observable<Visit[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLGetFutureTodayVisits + `/${doctorId}`;
    return this.http.get<Visit[]>(URL, {headers});
  }

}
