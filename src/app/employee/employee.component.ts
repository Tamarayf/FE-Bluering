import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEmployeeModalComponent } from '../add-employee-modal/add-employee-modal.component';
import { Employee } from './Employee';
import { DeleteConfirmationModalComponent } from '../delete-confirmation-modal/delete-confirmation-modal.component';
import { Department } from "../Department";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };



  departments: Department[] = [];
  deleteConfirmationModal: any;
  employeeToDelete!: Employee; // Assuming Employee is your model class
  editedEmployee: Employee | null = null; // Store the edited employee object here
  employees1: Employee[] = [];
  filteredEmployees: Employee[] = [...this.employees1];
  searchQuery: string = '';
  searchActive: boolean = false;
  constructor(private http: HttpClient, private modalService: NgbModal) {} // Inject NgbModal service here

  ngOnInit() {
    this.getAllEmployees();
    // this.getDepartments();
    this.filteredEmployees = this.employees1.slice();
  }

  openDeleteConfirmationModal(employee: Employee) {
    const modalRef = this.modalService.open(DeleteConfirmationModalComponent);
    modalRef.componentInstance.employeeToDelete = employee; // Pass the employee to delete to the modal
    modalRef.result.then(
      (result) => {
        if (result === 'delete') {
          this.deleteEmployee(employee);
        }
      },
      (reason) => {}
    );
  }

  deleteEmployee(employee: Employee) {
    let url = `http://localhost:8080/api/employees/${employee.empId}`;
    this.http.delete<any>(url).subscribe(
      (res) => {
        if (res.success) {
          // Handle success, such as refreshing the employee list
          this.getAllEmployees();
        } else {
          console.error('Error deleting employee:', res.message);
        }
      },
      (error) => {
        console.error('Error deleting employee:', error);
      }
    );
  }

  public getAllEmployees() {
    let url = 'http://localhost:8080/api/employees';
    this.http.get<any>(url).subscribe(
      res => {
        if (res.success) {
          this.employees1 = res.returnField;
        } else {
          console.error('Error fetching employees:', res.message);
        }
      },
      error => {
        console.error('Error fetching employees:', error);
      }
    );
  }
  onSearch(): void {
    const query = this.searchQuery.toLowerCase().trim();
    this.filteredEmployees = this.employees1.filter(employee =>
      employee.firstName.toLowerCase().includes(query) ||
      employee.lastName.toLowerCase().includes(query)
    );

    this.searchActive = true;
  }
  resetSearch(): void {
    this.searchQuery = '';
    this.filteredEmployees = [...this.employees1];
  }

  openEditEmployeeModal(employee: Employee) {
    const modalRef = this.modalService.open(AddEmployeeModalComponent);
    modalRef.componentInstance.employee = { ...employee }; // Pass a copy of the employee data to avoid modifying the original
    modalRef.result.then((result) => {
      if (result === 'save') {
        this.updateEmployee(employee);
      }
    }).catch((error) => {
      console.error('Modal dismissed:', error);
    });
  }

  updateEmployee(employee: Employee) {
    let url = `http://localhost:8080/api/employees/${employee.empId}`;
    this.http.put<any>(url, employee, this.httpOptions).subscribe(
      res => {
        if (res.success) {
          this.getAllEmployees(); // Refresh the employee data after updating
        } else {
          console.error('Error updating employee:', res.message);
        }
      },
      error => {
        console.error('Error updating employee:', error);
      }
    );
  }

  openAddEmployeeModal() {
    const modalRef = this.modalService.open(AddEmployeeModalComponent);
    modalRef.result.then((result) => {
      // Handle modal result if needed
    }).catch((error) => {
      // Handle modal dismiss if needed
    });
  }
}

