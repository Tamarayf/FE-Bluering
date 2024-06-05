import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-employee-modal',
  templateUrl: './add-employee-modal.component.html',
  styleUrls: ['./add-employee-modal.component.css']
})
export class AddEmployeeModalComponent {
  @Output() employeeAdded = new EventEmitter<void>();

  employee = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    department: null
  };

  departments = [
    { id: 1, name: 'IT' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'Finance' }
  ];

  constructor(private http: HttpClient) {}

  onSubmit() {
    const url = 'http://localhost:8080/api/employees';
    this.http.post<any>(url, this.employee, { headers: new HttpHeaders({'Content-Type': 'application/json'}) }).subscribe(
      res => {
        console.log('Employee added successfully');
        this.employeeAdded.emit();
        this.resetForm();
        const modalElement = document.getElementById('addEmployeeModal');
        if (modalElement) {
          const modal = bootstrap.Modal.getInstance(modalElement);
          modal.hide();
        }
      },
      error => {
        console.error('Error adding employee:', error);
      }
    );
  }

  resetForm() {
    this.employee = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      department: null
    };
  }
}
