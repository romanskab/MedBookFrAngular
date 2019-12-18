import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Laboratory} from '../models/Laboratory';
import {BehaviorSubject, Observable} from 'rxjs';
import {Test} from '../models/Test';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class LaboratoryService {

  constructor(private http: HttpClient,
              private config: ConfigService) {
  }

  private baseURL = this.config.api;
  private laboratoryURL = this.config.api + '/laboratory';

  private URLSave = `${this.baseURL}/save/laboratory`;
  private URLCurrent = `${this.laboratoryURL}/current`;
  private URLGetPatientByUsername = `${this.laboratoryURL}/getPatientByUsername`;
  private URLGetTestsTitles = `${this.laboratoryURL}/tests/titles`;
  private URLSaveTestResult = `${this.laboratoryURL}/test/save`;

  // @ts-ignore
  currentLaboratorySubject = new BehaviorSubject();

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
