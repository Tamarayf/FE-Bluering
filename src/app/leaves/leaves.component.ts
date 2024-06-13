// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
//
// @Component({
//   selector: 'app-leaves',
//   templateUrl: './leaves.component.html',
//   styleUrls: ['./leaves.component.css']
// })
// export class LeavesComponent implements OnInit {
//   leaves: any[] = [];
//   pagedRows: any[] = [];
//   columns: any[] = [
//     { prop: 'leaveTypeId', name: 'Leave Type' },
//     { prop: 'fromDate', name: 'From Date' },
//     { prop: 'toDate', name: 'To Date' },
//     { prop: 'numberOfDays', name: 'Number of Days' },
//     { prop: 'note', name: 'Note' },
//     { prop: 'employeeId', name: 'Employee ID' }
//   ];
//
//   // Pagination properties
//   currentPage: number = 1;
//   itemsPerPage: number = 10; // Display 10 items per page
//   totalItems: number = 0;
//   totalPages: number = 0;
//
//   // Filter properties
//   leaveTypeId: number | null = null;
//   employeeId: number | null = null;
//
//   constructor(private http: HttpClient) { }
//
//   ngOnInit(): void {
//     this.getLeaves();
//   }
//
//   onPageChange(page: number): void {
//     this.currentPage = page;
//     this.getLeaves();
//   }
//
//   prevPage(): void {
//     if (this.currentPage > 1) {
//       this.currentPage--;
//       this.getLeaves();
//     }
//   }
//
//   getLeaves(): void {
//     console.log(`Fetching leaves for page ${this.currentPage}, items per page ${this.itemsPerPage}`);
//     this.http.post<any>('http://localhost:8080/api/leavesPag', {
//       leaveTypeId: this.leaveTypeId,
//       employeeId: this.employeeId,
//       page: this.currentPage-1,
//       size: this.itemsPerPage
//     }).subscribe(
//       res => {
//         console.log('API Response:', res);
//         if (res.success) {
//           const response = res.returnField;
//           this.leaves = response.items;
//           this.totalItems = response.totalItems;
//           this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage); // Update totalPages
//           console.log(`Total Items: ${this.totalItems}, Total Pages: ${this.totalPages}`);
//           this.updatePage();
//           console.log('Paged Rows:', this.pagedRows);
//         } else {
//           console.error('Error fetching leaves:', res.message);
//         }
//
//       },
//       error => {
//         console.error('Error fetching leaves:', error);
//       }
//     );
//   }
//
//
//   updatePage(): void {
//     console.log(`Updating page ${this.currentPage}`);
//     console.log('Leaves:', this.leaves); // Log the leaves array
//
//     const startIndex = (this.currentPage - 1) * this.itemsPerPage;
//     const endIndex = Math.min(startIndex + this.itemsPerPage, this.totalItems);
//     console.log(`startIndex: ${startIndex}, endIndex: ${endIndex}`); // Log startIndex and endIndex
//     this.pagedRows = this.leaves.slice(startIndex, endIndex);
//     console.log(`Paged Rows Indices: Start - ${startIndex}, End - ${endIndex}`);
//     console.log('Current Paged Rows:', this.pagedRows);
//   }
//
//   nextPage(): void {
//     if (this.currentPage < this.totalPages) {
//       this.currentPage++;
//       this.getLeaves();
//     }
//   }
//
//   onFilterChange(): void {
//     this.currentPage = 1;
//     this.getLeaves();
//   }
// }
// //
// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
//
// @Component({
//   selector: 'app-leaves',
//   templateUrl: './leaves.component.html',
//   styleUrls: ['./leaves.component.css']
// })
// export class LeavesComponent implements OnInit {
//   leaves: any[] = [];
//   pagedRows: any[] = [];
//   columns: any[] = [
//     { prop: 'leaveTypeId', name: 'Leave Type' },
//     { prop: 'fromDate', name: 'From Date' },
//     { prop: 'toDate', name: 'To Date' },
//     { prop: 'numberOfDays', name: 'Number of Days' },
//     { prop: 'note', name: 'Note' },
//     { prop: 'employeeId', name: 'Employee ID' }
//   ];
//
//   // Pagination properties
//   currentPage: number = 1;
//  itemsPerPage: number = 10; // Display 10 items per page
//   totalItems: number = 0;
//   totalPages: number = 0;
//
//   // Filter properties
//   leaveTypeId: number | null = null;
//   employeeId: number | null = null;
//
//   constructor(private http: HttpClient) { }
//
//   ngOnInit(): void {
//     this.getLeaves();
//   }
//
//   onPageChange(page: number): void {
//     this.currentPage = page;
//     this.getLeaves();
//   }
//
//   prevPage(): void {
//     if (this.currentPage > 1) {
//       this.currentPage--;
//       this.getLeaves();
//     }
//   }
//
//   nextPage(): void {
//     if (this.currentPage < this.totalPages) {
//       this.currentPage++;
//       this.getLeaves();
//     }
//   }
//
//   getLeaves(): void {
//     console.log(`Fetching leaves for page ${this.currentPage}, items per page ${this.itemsPerPage}`);
//     this.http.post<any>('http://localhost:8080/api/leavesPag', {
//       leaveTypeId: this.leaveTypeId,
//       employeeId: this.employeeId,
//       page: this.currentPage , // Backend uses zero-based indexing
//       size: this.itemsPerPage
//     }).subscribe(
//       res => {
//         console.log('API Response:', res);
//         if (res.success) {
//           const response = res.returnField;
//           console.log('Leaves:', response.items); // Log the items array
//           this.leaves = response.items;
//           this.totalItems = response.totalItems;
//           this.totalPages = response.totalPages;
//           console.log(`Total Items: ${this.totalItems}, Total Pages: ${this.totalPages}`);
//         } else {
//           console.error('Error fetching leaves:', res.message);
//         }
//       },
//       error => {
//         console.error('Error fetching leaves:', error);
//       }
//     );
//   }
//
//
//   updatePage(): void {
//     console.log(`Updating page ${this.currentPage}`);
//     console.log('Leaves:', this.leaves); // Log the leaves array
//
//     const startIndex = (this.currentPage - 1) * this.itemsPerPage;
//     const endIndex = Math.min(startIndex + this.itemsPerPage, this.totalItems);
//     console.log(`startIndex: ${startIndex}, endIndex: ${endIndex}`); // Log startIndex and endIndex
//     this.pagedRows = this.leaves.slice(startIndex, endIndex);
//     console.log(`Paged Rows Indices: Start - ${startIndex}, End - ${endIndex}`);
//     console.log('Current Paged Rows:', this.pagedRows);
//   }
//
//
//   onFilterChange(): void {
//     this.currentPage = 1;
//     this.getLeaves();
//   }
// }



import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements OnInit {
  leaves: any[] = [];
  columns: any[] = [
    { prop: 'leaveTypeId', name: 'Leave Type' },
    { prop: 'fromDate', name: 'From Date' },
    { prop: 'toDate', name: 'To Date' },
    { prop: 'numberOfDays', name: 'Number of Days' },
    { prop: 'note', name: 'Note' },
    { prop: 'employeeId', name: 'Employee ID' }
  ];

  // Pagination properties
  currentPage: number = 1;
  itemsPerPage: number = 5; // Display 10 items per page
  totalItems: number = 0;

  // Filter properties
  leaveTypeId: number | null = null;
  employeeId: number | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getLeaves();
  }

  onPageChange(event: any): void {
    this.currentPage = event.offset + 1;
    this.getLeaves();
  }

  getLeaves(): void {
    this.http.post<any>('http://localhost:8080/api/leavesPag', {
      leaveTypeId: this.leaveTypeId,
      employeeId: this.employeeId,
      page: this.currentPage - 1,
      size: this.itemsPerPage
    }).subscribe(
      res => {
        if (res.success) {
          const response = res.returnField;
          this.leaves = response.items;
          this.totalItems = response.totalItems;
        } else {
          console.error('Error fetching leaves:', res.message);
        }
      },
      error => {
        console.error('Error fetching leaves:', error);
      }
    );
  }

  onFilterChange(): void {
    this.currentPage = 1;
    this.getLeaves();
  }
}

//
//
// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
//
// @Component({
//   selector: 'app-leaves',
//   templateUrl: './leaves.component.html',
//   styleUrls: ['./leaves.component.css']
// })
// export class LeavesComponent implements OnInit {
//   leaves: any[] = [];
//   columns: any[] = [
//     { prop: 'leaveTypeId', name: 'Leave Type' },
//     { prop: 'fromDate', name: 'From Date' },
//     { prop: 'toDate', name: 'To Date' },
//     { prop: 'numberOfDays', name: 'Number of Days' },
//     { prop: 'note', name: 'Note' },
//     { prop: 'employeeId', name: 'Employee ID' }
//   ];
//
//   // Pagination properties
//   currentPage: number = 1;
//   itemsPerPage: number = 10; // Display 10 items per page
//   totalItems: number = 0;
//   totalPages: number = 0;
//
//   // Filter properties
//   leaveTypeId: number | null = null;
//   employeeId: number | null = null;
//
//   constructor(private http: HttpClient) { }
//
//   ngOnInit(): void {
//     this.getLeaves();
//   }
//
//   onPageChange(page: number): void {
//     this.currentPage = page;
//     this.getLeaves();
//   }
//
//   prevPage(): void {
//     if (this.currentPage > 1) {
//       this.currentPage--;
//       this.getLeaves();
//     }
//   }
//
//   getLeaves(): void {
//     console.log(`Fetching leaves for page ${this.currentPage}, items per page ${this.itemsPerPage}`);
//     const requestBody: any = {
//       page: this.currentPage - 1,
//       size: this.itemsPerPage
//     };
//
//     if (this.leaveTypeId !== null) {
//       requestBody.leaveTypeId = this.leaveTypeId;
//     }
//
//     if (this.employeeId !== null) {
//       requestBody.employeeId = this.employeeId;
//     }
//
//     this.http.post<any>('http://localhost:8080/api/leavesPag', requestBody).subscribe(
//       res => {
//         console.log('API Response:', res);
//         if (res.success) {
//           const response = res.returnField;
//           this.leaves = response.items;
//           this.totalItems = response.totalItems;
//           this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
//           console.log(`Total Items: ${this.totalItems}, Total Pages: ${this.totalPages}`);
//         } else {
//           console.error('Error fetching leaves:', res.message);
//         }
//       },
//       error => {
//         console.error('Error fetching leaves:', error);
//       }
//     );
//   }
//
//   nextPage(): void {
//     if (this.currentPage < this.totalPages) {
//       this.currentPage++;
//       this.getLeaves();
//     }
//   }
//
//   onFilterChange(): void {
//     this.currentPage = 1;
//     this.getLeaves();
//   }
//
//
// }
