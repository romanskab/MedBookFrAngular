import {Injectable} from '@angular/core';
import {Patient} from '../models/Patient';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Doctor} from '../models/Doctor';
import {Visit} from '../models/Visit';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  URLSavePatient = 'http://localhost:8080/save/patient';
  URLGetCurrentPatient = 'http://localhost:8080/patient/current';
  URLGetDoctorsBySpeciality = 'http://localhost:8080/patient/doctors/spec';
  URLGetFreeVisitToDoctor = 'http://localhost:8080/patient/freeVisitToDoctor';
  URLRecordToDoctor = 'http://localhost:8080/patient/recordToDoctor';
  URLGetLastVisitToDoctor = 'http://localhost:8080/patient/visit/last';

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

}
