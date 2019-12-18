import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Doctor} from '../models/Doctor';
import {Patient} from '../models/Patient';
import {BehaviorSubject, Observable} from 'rxjs';
import {Visit} from '../models/Visit';
import {Test} from '../models/Test';
import {TestResult} from '../models/TestResult';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient,
              private config: ConfigService) {
  }

  private baseURL = this.config.api;
  private doctorURL = this.config.api + '/doctor';

  private URLGetSpecialities = `${this.baseURL}/specialities`;
  private URLSaveDoctor = `${this.baseURL}/save/doctor`;
  private URLCurrent = `${this.doctorURL}/current`;
  private URLGetPatientByUsername = `${this.doctorURL}/getPatientByUsername`;
  private URLSaveResultOfVisit = `${this.doctorURL}/saveResultOfVisit`;
  private URLGetVisitsByPatientId = `${this.doctorURL}/visitsByPatientId`;
  private URLGetFinishedVisitsByPatientId = `${this.doctorURL}/finishedVisitsByPatientId`;
  private URLGetFinishedVisitsByDoctorId = `${this.doctorURL}/finishedVisitsByDoctorId`;
  private URLGetVisitsByDoctorId = `${this.doctorURL}/visitsByDoctorId`;
  private URLAddWorkTimes = `${this.doctorURL}/addWorkTimes`;
  private URLGetFutureTodayVisits = `${this.doctorURL}/futureTodayVisits`;
  private URLGetFutureVisits = `${this.doctorURL}/futureVisits`;
  private URLGetNextVisit = `${this.doctorURL}/nextVisit`;
  private URLGetLastVisit = `${this.doctorURL}/lastVisit`;

  private URLGetTestsTitles = `${this.doctorURL}/tests/titles`;
  private URLSaveTestResult = `${this.doctorURL}/test/save`;
  private URLGetTestResultsByPatientId = `${this.doctorURL}/testResults/patient`;

  // @ts-ignore
  currentDoctorSubject = new BehaviorSubject();
  // @ts-ignore
  currentVisitSubject = new BehaviorSubject();

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

  getFinishedVisitsByDoctorId(id): Observable<Visit[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLGetFinishedVisitsByDoctorId + `/${id}`;
    return this.http.get<Visit[]>(URL, {headers});
  }

  getFinishedVisitsByPatientId(id): Observable<Visit[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLGetFinishedVisitsByPatientId + `/${id}`;
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

  getFutureVisits(doctorId): Observable<Visit[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLGetFutureVisits + `/${doctorId}`;
    return this.http.get<Visit[]>(URL, {headers});
  }

  getNextVisit(doctorId): Observable<Visit> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLGetNextVisit + `/${doctorId}`;
    return this.http.get<Visit>(URL, {headers});
  }

  getLastVisit(doctorId): Observable<Visit> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLGetLastVisit + `/${doctorId}`;
    return this.http.get<Visit>(URL, {headers});
  }

//    --------------------------------------------
//                     АНАЛІЗИ
//    --------------------------------------------
  getTestsTitles(): Observable<Test[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.get<Test[]>(this.URLGetTestsTitles, {headers});
  }

  saveTestResult(result, testId, patientId, meterId) {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLSaveTestResult + `/${testId}` + `/${patientId}` + `/${meterId}`;
    return this.http.post(URL, result, {headers});
  }

  getTestResults(patientId): Observable<TestResult[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLGetTestResultsByPatientId + `/${patientId}`;
    return this.http.get<TestResult[]>(URL, {headers});
  }

}
