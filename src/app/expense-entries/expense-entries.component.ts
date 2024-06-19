// // src/app/components/expense-entries/expense-entries.component.ts
// import { Component, OnInit } from '@angular/core';
// import {ActivatedRoute, Router} from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import {FormBuilder, FormGroup, Validators} from "@angular/forms";
// import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
//
// @Component({
//   selector: 'app-expense-entries',
//   templateUrl: './expense-entries.component.html',
//   styleUrls: ['./expense-entries.component.css'],
//   providers: [NgbActiveModal]
// })
// export class ExpenseEntriesComponent implements OnInit {
//   entriesForm!  :FormGroup;
//   expenseClaimId!: number;
//   entries: any[] = [];
//
//   constructor(
//     private formBuilder: FormBuilder,
//     public activeModal: NgbActiveModal,
//   private route: ActivatedRoute,
//     private http: HttpClient
//
//   ) {}
//   ngOnInit(): void {
//     this.entriesForm = this.formBuilder.group({
//       expenseClaimEntryId: ['', Validators.required],
//       dateEntry: ['', Validators.required],
//       expenseTypeId: ['', Validators.required],
//       expenseClaimId: ['', Validators.required],
//       description: ['', Validators.required],
//       total: ['', Validators.required]
//     });
//     const id = this.route.snapshot.paramMap.get('id');
//     if (id !== null) {
//       this.expenseClaimId = parseInt(id, 10);
//       this.loadExpenseEntries();  // Ensure this method is called to load the entries
//     }
//   }
//
//   loadExpenseEntries() {
//     const url = `http://localhost:8080/api/expense-entries/${this.expenseClaimId}`;
//     this.http.get<any>(url).subscribe(
//       (res) => {
//         if (res.success) {
//           this.entries = res.entries;
//         } else {
//           console.error('Error fetching entries:', res.message);
//         }
//       },
//       (error) => {
//         console.error('Error fetching entries:', error);
//       }
//     );
//   }
// }
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {expenseEntries} from "./expense-entries";

@Component({
  selector: 'app-expense-entries',
  templateUrl: './expense-entries.component.html',
  styleUrls: ['./expense-entries.component.css'],
  providers: [NgbActiveModal]
})
export class ExpenseEntriesComponent implements OnInit {
  entriesForm!: FormGroup;
  expenseClaimId!: number;
  entries: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private route: ActivatedRoute,
    private router: Router, // Inject the router
    private http: HttpClient
  ) {}




  ngOnInit(): void {
    this.entriesForm = this.formBuilder.group({
      expenseClaimEntryId: ['', Validators.required],
      dateEntry: ['', Validators.required],
      expenseTypeId: ['', Validators.required],
      expenseClaimId: ['', Validators.required],
      description: ['', Validators.required],
      total: ['', Validators.required]
    });
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.expenseClaimId = parseInt(id, 10);
      this.loadExpenseEntries();
    }
  }
  goBack() {
    this.router.navigate(['/main/expenses']); // Navigate to the expense page
  }
  loadExpenseEntries() {
    const url = `http://localhost:8080/api/expense-entries/${this.expenseClaimId}`;
    console.log(`Fetching data from: ${url}`);  // Debugging statement

    this.http.get<any>(url).subscribe(
      (res) => {
        console.log('API response:', res);  // Debugging statement
        if (res.success) {
          this.entries = res.returnField;  // Ensure the response is correctly assigned
          console.log('Entries:', this.entries);  // Debugging statement
        } else {
          console.error('Error fetching entries:', res.message);
        }
      },
      (error) => {
        console.error('Error fetching entries:', error);
      }
    );
  }






}
