import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Servicee {
  private baseUrl = 'http://localhost:8080/api/Leave/';

  constructor(private http: HttpClient) { }

  saveLeave(leaveData: any): Observable<any> {
    return this.http.post(this.baseUrl, leaveData);
  }
}

