import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Doctor} from '../models/Doctor';
import {Laboratory} from '../models/Laboratory';
import {Patient} from '../models/Patient';

@Injectable({
  providedIn: 'root'
})
export class LaboratoryService {

  constructor(private http: HttpClient) {
  }

  save(laboratory: Laboratory) {
    return this.http.post<Laboratory>('http://localhost:8080/save/laboratory', laboratory);
  }

  getCurrentLaboratory() {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.get<Laboratory>('http://localhost:8080/laboratory/current', {headers});
  }
}
