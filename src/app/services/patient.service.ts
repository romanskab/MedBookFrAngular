import {Injectable} from '@angular/core';
import {Patient} from '../models/Patient';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Doctor} from '../models/Doctor';
import {Visit} from '../models/Visit';
import {TestResult} from '../models/TestResult';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient,
              private config: ConfigService) {
  }

  private baseURL = this.config.api;
  private patientURL = this.config.api + '/patient';

  private URLSavePatient = `${this.baseURL}/save/patient`;
  private URLGetCurrentPatient = `${this.patientURL}/current`;
  private URLGetDoctorsBySpeciality = `${this.patientURL}/doctors/spec`;
  private URLGetFreeVisitToDoctor = `${this.patientURL}/freeVisitToDoctor`;
  private URLRecordToDoctor = `${this.patientURL}/recordToDoctor`;
  private URLGetLastVisitToDoctor = `${this.patientURL}/visit/last`;
  private URLGetNextVisitToDoctor = `${this.patientURL}/visit/next`;
  private URLGetAllFinishedVisits = `${this.patientURL}/visits/finished`;

  private URLGetLastTestResult = `${this.patientURL}/testResult/last`;
  private URLGetAllTestResults = `${this.patientURL}/testResults`;
  private URLGetAllTestResultsByTitle = `${this.patientURL}/testResultsByTitle`;

  // @ts-ignore
  currentPatientSubject = new BehaviorSubject();

  save(patient: Patient) {
    console.log(patient);
    return this.http.post<Patient>(this.URLSavePatient, patient);
  }

  getCurrentPatient() {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.get<Patient>(this.URLGetCurrentPatient, {headers});
  }

  getDoctorsBySpeciality(speciality): Observable<Doctor[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLGetDoctorsBySpeciality + `/${speciality}`;
    return this.http.get<Doctor[]>(URL, {headers});
  }

  getFreeVisitToDoctor(doctorId): Observable<Visit[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLGetFreeVisitToDoctor + `/${doctorId}`;
    return this.http.get<Visit[]>(URL, {headers});
  }

  recordToDoctor(visitId, patientId) {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLRecordToDoctor + `/${visitId}` + `/${patientId}`;
    return this.http.post(URL, null, {headers});
  }

  getLastVisitToDoctor(patientId): Observable<Visit> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLGetLastVisitToDoctor + `/${patientId}`;
    return this.http.get<Visit>(URL, {headers});
  }

  getNextVisitToDoctor(patientId): Observable<Visit> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLGetNextVisitToDoctor + `/${patientId}`;
    return this.http.get<Visit>(URL, {headers});
  }

  getAllFinishedVisits(patientId): Observable<Visit[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLGetAllFinishedVisits + `/${patientId}`;
    return this.http.get<Visit[]>(URL, {headers});
  }

//  -----------------------------------------------
//                  АНАЛІЗИ
//  -----------------------------------------------
  getLastTestResult(patientId, title): Observable<TestResult> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLGetLastTestResult + `/${patientId}` + `/${title}`;
    return this.http.get<TestResult>(URL, {headers});
  }

  getAllTestResults(patientId): Observable<TestResult[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLGetAllTestResults + `/${patientId}`;
    return this.http.get<TestResult[]>(URL, {headers});
  }

  getAllTestsByTitleAndPatient(patientId, title): Observable<TestResult[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLGetAllTestResultsByTitle + `/${patientId}` + `/${title}`;
    return this.http.get<TestResult[]>(URL, {headers});
  }

}
