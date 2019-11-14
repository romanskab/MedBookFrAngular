import {Injectable} from '@angular/core';
import {Patient} from '../models/Patient';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Doctor} from '../models/Doctor';
import {Visit} from '../models/Visit';
import {TestResult} from '../models/TestResult';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private URLSavePatient = 'http://localhost:8080/save/patient';
  private URLGetCurrentPatient = 'http://localhost:8080/patient/current';
  private URLGetDoctorsBySpeciality = 'http://localhost:8080/patient/doctors/spec';
  private URLGetFreeVisitToDoctor = 'http://localhost:8080/patient/freeVisitToDoctor';
  private URLRecordToDoctor = 'http://localhost:8080/patient/recordToDoctor';
  private URLGetLastVisitToDoctor = 'http://localhost:8080/patient/visit/last';
  private URLGetNextVisitToDoctor = 'http://localhost:8080/patient/visit/next';
  private URLGetAllFinishedVisits = 'http://localhost:8080/patient/visits/finished';

  private URLGetLastTestResult = 'http://localhost:8080/patient/testResult/last';
  private URLGetAllTestResults = 'http://localhost:8080/patient/testResults';
  private URLGetAllTestResultsByTitle = 'http://localhost:8080/patient/testResultsByTitle';

  // @ts-ignore
  currentPatientSubject = new BehaviorSubject();

  constructor(private http: HttpClient) {
  }

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
