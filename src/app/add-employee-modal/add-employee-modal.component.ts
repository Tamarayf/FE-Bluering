import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from "../Department";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { HttpClient } from "@angular/common/http";
import { Employee } from "../employee/Employee";

@Component({
  selector: 'app-add-employee-modal',
  templateUrl: './add-employee-modal.component.html',
  styleUrls: ['./add-employee-modal.component.css']
})
export class AddEmployeeModalComponent implements OnInit {
  @Input() employee: Employee | null = null;

  employeeForm!: FormGroup;
  departments: Department[] = [];
  employees: Employee[] = [];
  isEditMode = false; // flag to determine whether it's edit mode or add mode
  modalTitle = 'Add Employee'; // default modal title
  errorMessage: string = '';


  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal, private http: HttpClient) {
  }

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phonenumber: ['', Validators.required],
      address: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18), Validators.max(65)]],
      // departmentName: ['', Validators.required],
      departmentId: ['', Validators.required],
      gender: ['', Validators.required]
    });

    this.loadDepartments();

    // If employee data is provided, set form values and switch to edit mode
    if (this.employee) {
      this.isEditMode = true;
      this.modalTitle = 'Edit Employee';
      this.employeeForm.patchValue(this.employee);
    }
  }

  addEmployeeToTable(employee: any) {
    this.employees.push(employee);
    this.getAllEmployees();
  }



  getAllEmployees() {
    let url = 'http://localhost:8080/api/employees';
    this.http.get<any>(url).subscribe(
      res => {
        if (res.success) {
          this.employees = res.returnField;
        } else {
          console.error('Error fetching employees:', res.message);
        }
      },
      error => {
        console.error('Error fetching employees:', error);
      }
    );
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
    if (this.employeeForm.valid) {
      const newEmployee: Employee = {
        ...this.employeeForm.value,
        departmentId: parseInt(this.employeeForm.value.departmentId, 10),
        empId: this.employee && this.employee.empId // Set empId only if it exists in edit mode
      };

      console.log('Employee data:', newEmployee);

      // Determine request type and URL
      const requestType = this.isEditMode ? 'patch' : 'post';
      const apiUrl = this.isEditMode ? `http://localhost:8080/api/employees/${this.employee?.empId}` : 'http://localhost:8080/api/employees/';

      // Send request
      this.http[requestType](apiUrl, newEmployee).subscribe(
        response => {
          console.log('Employee saved:', response);
          this.addEmployeeToTable(response);
          this.activeModal.close('Employee added');
          // Reload the page
          location.reload();
        },
        error => {
          console.error('Error saving employee:', error);
          this.errorMessage = 'Failed to save employee. Please try again.';
        }
      );
    } else {
      console.log('Form is invalid');

      // Additional debugging to find out which controls are invalid
      Object.keys(this.employeeForm.controls).forEach(key => {
        const controlErrors = this.employeeForm.get(key)?.errors;
        if (controlErrors != null) {
          console.log('Key control: ' + key + ', Errors: ' + JSON.stringify(controlErrors));
        }
      });

      this.errorMessage = 'Please fill out all required fields correctly.';
    }
  }

  closeModal() {
    this.activeModal.dismiss('Modal closed');
  }

  clearDepartmentSelection() {
    const departmentControl = this.employeeForm.get('departmentId');
    if (departmentControl) {
      departmentControl.setValue('');
    }
  }




}
