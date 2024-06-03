import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  // getEmployees(): Observable<ApiResponse> {
  //   return this.http.get<ApiResponse>(`${this.apiUrl}/employees`)
  //     .pipe(
  //       catchError(this.handleError)
  //     );

  getEmployees(): Observable<any> {
    return this.http.get<any>('/employees');
  }

}




