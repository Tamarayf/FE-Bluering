// services/expenses.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {expense} from "./expense";


@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  private apiUrl = 'http://localhost:8080/api/expense';

  constructor(private http: HttpClient) {}

  getExpenses(): Observable<expense[]> {
    return this.http.get<expense[]>(this.apiUrl);
  }
}
