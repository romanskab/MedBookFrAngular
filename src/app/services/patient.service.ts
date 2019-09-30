import { Injectable } from '@angular/core';
import {Patient} from '../models/Patient';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

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
}
