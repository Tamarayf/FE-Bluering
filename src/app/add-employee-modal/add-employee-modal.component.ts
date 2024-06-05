import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Department} from "../Department";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpClient} from "@angular/common/http";
import {Employee} from "../Employee";

@Component({
  selector: 'app-add-employee-modal',
  templateUrl: './add-employee-modal.component.html',
  styleUrls: ['./add-employee-modal.component.css']
})
export class AddEmployeeModalComponent implements OnInit {
  employeeForm!: FormGroup;
  departments: Department[] = [];
  private departmentSelected: boolean =false;
  private employees: Employee[]=[];


  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal, private http: HttpClient) { }

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      department: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required]
    });

    this.loadDepartments();
  }



// Function to check if a department is selected

  // loadDepartments() {
  //   this.http.get<any>('http://localhost:8080/api/departments').subscribe(
  //     res => {
  //       console.log('Response from API:', res); // Log the response
  //       if (res.success && Array.isArray(res.returnField)) {
  //         this.departments = res.returnField;
  //       } else {
  //         console.error('Invalid response format:', res);
  //       }
  //       console.log('Departments:', this.departments); // Log the departments array
  //     },
  //     error => {
  //       console.error('Error loading departments:', error);
  //     }
  //   );
  // }

  addEmployeeToTable(employee: Employee) {
    this.employees.push(employee);
  }


  loadDepartments() {
    this.http.get<any>('http://localhost:8080/api/departments').subscribe(
      res => {
        if (Array.isArray(res.returnField)) {
          this.departments = res.returnField;
        } else {
          console.error('Departments array not found in response:', res);
        }
      },
      error => {
        console.error('Error loading departments:', error);
      }
    );
  }



  saveEmployee() {
    

  }



  closeModal() {
    this.activeModal.dismiss('Modal closed');
  }

  checkDepartmentSelected() {
    this.departmentSelected = this.employeeForm.get('department')?.value !== '';
  }

  clearDepartmentSelection() {
    const departmentControl = this.employeeForm.get('department');
    if (departmentControl) {
      departmentControl.setValue('');
      this.departmentSelected = false;
    }
  }



}
