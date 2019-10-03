import { Injectable } from '@angular/core';
import {Patient} from '../models/Patient';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Doctor} from '../models/Doctor';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  URLGetDoctorsBySpeciality = 'http://localhost:8080/patient/doctors/spec';

  constructor(private http: HttpClient) { }

  save(patient: Patient) {
    return this.http.post<Patient>('http://localhost:8080/save/patient', patient);
  }

  getCurrentPatient() {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.get<Patient>('http://localhost:8080/patient/current', {headers});
  }

  getDoctorsBySpeciality(speciality): Observable<Doctor[]> {
    console.log('start service method get');
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLGetDoctorsBySpeciality + `/${speciality}`;
    return this.http.get<Doctor[]>(URL, {headers});
  }
}
