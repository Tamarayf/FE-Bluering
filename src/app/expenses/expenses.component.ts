// src/app/components/expenses/expenses.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import {expense} from "./expense";
import {Router} from "@angular/router";
import {ExpenseEntriesComponent} from "../expense-entries/expense-entries.component";

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
  providers: [NgbActiveModal]
})
export class ExpensesComponent implements OnInit {
  expenses: expense[] = [];
  displayedExpenses: expense[] = [];
  page: number = 1;
  pageSize: number = 5;
  totalExpenses: number = 0;
  expensesForm!: FormGroup;

  expenseClaimId!: number;
  entries: any[] = [];


  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private http: HttpClient,
    private router: Router,
  private modalService: NgbModal

  ) {}

  ngOnInit() {
    this.expensesForm = this.formBuilder.group({
      expenseClaimId: ['', Validators.required],
      dates: ['', Validators.required],
      description: ['', Validators.required],
      total: ['', Validators.required],
      statuss: ['', Validators.required],
      employeeId: ['', Validators.required]
    });
    this.getExpenses();
  }

  // viewExpenseEntries() {
  //   // Example navigation code
  //   this.router.navigate(['/expenses/expense-entries']);
  //
  // }


  openExpenseEntries(expenseClaimId: number) {
    const modalRef = this.modalService.open(ExpenseEntriesComponent);
    modalRef.componentInstance.expenseClaimId = expenseClaimId;
  }

  getExpenses() {
    const url = 'http://localhost:8080/api/expense';
    this.http.get<any>(url).subscribe(
      (res) => {
        if (res.success) {
          this.expenses = res.returnField;
          this.totalExpenses = this.expenses.length;
          this.updateDisplayedExpenses();
        } else {
          console.error('Error fetching expenses:', res.message);
        }
      },
      (error) => {
        console.error('Error fetching expenses:', error);
      }
    );
  }

  updateDisplayedExpenses() {
    const startIndex = (this.page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedExpenses = this.expenses.slice(startIndex, endIndex);
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.updateDisplayedExpenses();
    }
  }

  nextPage() {
    if (this.page < Math.ceil(this.totalExpenses / this.pageSize)) {
      this.page++;
      this.updateDisplayedExpenses();
    }
  }

  totalPages(): number {
    return Math.ceil(this.totalExpenses / this.pageSize);
  }
}
