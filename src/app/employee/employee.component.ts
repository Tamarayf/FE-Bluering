import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employees: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.http.get<any>('api/employees').subscribe(
      (response) => {
        this.employees = response.data;
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }

  addEmployee(): void {
    const newEmployee = {
      // Fill in employee data here
    };

    this.http.post<any>('api/employee', newEmployee).subscribe(
      (response) => {
        console.log('Employee added successfully');
        this.getEmployees();
      },
      (error) => {
        console.error('Error adding employee:', error);
      }
    );
  }

  editEmployee(employee: any): void {
    // Here you can handle the logic to edit an employee.
    // For example, you might open a modal with a form to edit the employee details.
    console.log('Edit employee:', employee);

    // Example of updating employee data
    const updatedEmployee = {
      ...employee,
      // modify the fields you want to update
    };

    this.http.put<any>(`api/employees/${employee.id}`, updatedEmployee).subscribe(
      (response) => {
        console.log('Employee updated successfully');
        this.getEmployees(); // Refresh the list after updating
      },
      (error) => {
        console.error('Error updating employee:', error);
      }
    );
  }
}

