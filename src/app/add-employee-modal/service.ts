import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private http: HttpClient) { }

  // getData(): Observable<any> {
  //   return this.http.get<any>('https://api.example.com/data');
  // }

  postData(data: any): Observable<any> {
    return this.http.post<any>('https://localhost:8080/api/employees/', data);
  }
}
