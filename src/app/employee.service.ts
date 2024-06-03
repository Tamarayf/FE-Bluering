import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee'; // Import the Employee interface

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeesUrl = 'http://your-backend-url/api/employees'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl);
  }
}
