import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Doctor} from '../models/Doctor';
import {Laboratory} from '../models/Laboratory';
import {Patient} from '../models/Patient';
import {BehaviorSubject, Observable} from 'rxjs';
import {Test} from '../models/Test';

@Injectable({
  providedIn: 'root'
})
export class LaboratoryService {
  private URLCurrent = 'http://localhost:8080/laboratory/current';
  private URLSave = 'http://localhost:8080/save/laboratory';
  private URLGetPatientByUsername = 'http://localhost:8080/laboratory/getPatientByUsername';

  private URLGetTestsTitles = 'http://localhost:8080/laboratory/tests/titles';
  private URLSaveTestResult = 'http://localhost:8080/laboratory/test/save';

  // @ts-ignore
  currentLaboratorySubject = new BehaviorSubject();

  constructor(private http: HttpClient) {
  }

  save(laboratory: Laboratory) {
    return this.http.post<Laboratory>(this.URLSave, laboratory);
  }

  getCurrentLaboratory() {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.get<Laboratory>(this.URLCurrent, {headers});
  }

  getPatientByUsername(username) {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLGetPatientByUsername + `/${username}`;
    return this.http.get(URL, {headers});
  }

  getTestsTitles(): Observable<Test[]> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.get<Test[]>(this.URLGetTestsTitles, {headers});
  }

  saveResults(results, patientId, meterId) {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    const URL = this.URLSaveTestResult + `/${patientId}` + `/${meterId}`;
    return this.http.post(URL, results, {headers});
  }

}
