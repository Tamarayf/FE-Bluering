// import {Component} from '@angular/core';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
//
//
// @Component({
//   selector: 'app-employee',
//   templateUrl: './employee.component.html',
//   styleUrls: ['./employee.component.css']
// })
// export class EmployeeComponent{
//
//
//   private heroesUrl = 'api/heroes';  // URL to web api
//
//   httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//   };
//
//   employees: any []= [];
//
//   constructor(private http: HttpClient) {}
//
//   ngOnInit() {
//     this.getEmployees();
//
//   }
//
//   getEmployees(): void {
//     this.http.get<any>('api/employees').subscribe(
//       (response) => {
//         this.employees = response.data;
//       },
//       (error) => {
//         console.error('Error fetching employees:', error);
//       }
//     );
//   }
//
//
//   addEmployee(): void {
//     const newEmployee = {
//       // Fill in employee data here
//     };
//   }
//   //
//   //   this.http.post<any>('api/employee', newEmployee).subscribe(
//   //     (response) => {
//   //       console.log('Employee added successfully');
//   //       this.getEmployees();
//   //     },
//   //     (error) => {
//   //       console.error('Error adding employee:', error);
//   //     }
//   //   );
//   // }
//   // public getAllEmployees(){
//   //   let url='localhost:8080/api/employees';
//   //   this.http.get<Employee[]>(url).subscribe(
//   //     res => {
//   //       this.employees = res;
//   //     },
//   //   )
//   //
//   // }
//   editEmployee(employee: any): void {
//     // // Here you can handle the logic to edit an employee.
//     // // For example, you might open a modal with a form to edit the employee details.
//     // console.log('Edit employee:', employee);
//     //
//     // // Example of updating employee data
//     // const updatedEmployee = {
//     //   ...employee,
//     //   // modify the fields you want to update
//     };
//
//     // this.http.put<any>(`api/employees/${employee.id}`, updatedEmployee).subscribe(
//     //   (response) => {
//     //     console.log('Employee updated successfully');
//     //     this.getEmployees(); // Refresh the list after updating
//     //   },
//     //   (error) => {
//     //     console.error('Error updating employee:', error);
//     //   }
//     // );
//
//   // }
//
//
// }



import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {from} from "rxjs";
import {Employee} from "./Employee";



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  employees: Employee[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllEmployees();
  }

  public getAllEmployees() {
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


  // Uncomment and implement these methods if needed
  // getEmployees(): void {
  //   // Implement logic to get employees
  // }

  addEmployee(): void {
    // Implement logic to add employee
  }

  editEmployee(employee: Employee): void {
    // Implement logic to edit employee
  }

}






