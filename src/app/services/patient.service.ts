import {Injectable} from '@angular/core';
import {Patient} from '../models/Patient';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Doctor} from '../models/Doctor';
import {CalendarOfVisits} from '../models/CalendarOfVisits';
import {VisitToDoctor} from '../models/VisitToDoctor';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  URLGetDoctorsBySpeciality = 'http://localhost:8080/patient/doctors/spec';
  URLGetFreeTimeToDoctor = 'http://localhost:8080/patient/freeTimeToDoctor';
  URLSaveRecordInCalendar = 'http://localhost:8080/patient/saveRecordInCalendar';
  URLGetLastVisitToDoctor = 'http://localhost:8080/patient/visitsToDoctor/last';

  // @ts-ignore
  currentPatientSubject = new BehaviorSubject();

  constructor(private http: HttpClient) {
  }

  save(patient: Patient) {
    console.log(patient);
    return this.http.post<Patient>('http://localhost:8080/save/patient', patient);
  }

  getCurrentPatient() {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.get<Patient>('http://localhost:8080/patient/current', {headers});
  }

  getDoctorsBySpeciality(speciality): Observable<Doctor[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLGetDoctorsBySpeciality + `/${speciality}`;
    return this.http.get<Doctor[]>(URL, {headers});
  }

  getFreeTimeToDoctor(doctorId): Observable<CalendarOfVisits[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLGetFreeTimeToDoctor + `/${doctorId}`;
    return this.http.get<CalendarOfVisits[]>(URL, {headers});
  }

  saveRecordInCalendar(calendarId, patientId) {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLSaveRecordInCalendar + `/${calendarId}` + `/${patientId}`;
    return this.http.post(URL, null, {headers});
  }

  getLastVisitToDoctor(patientId): Observable<VisitToDoctor> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLGetLastVisitToDoctor + `/${patientId}`;
    return this.http.get<VisitToDoctor>(URL, {headers});
  }

}
