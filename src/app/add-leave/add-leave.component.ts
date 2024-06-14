// import { Component, Output, EventEmitter } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { HttpClient } from '@angular/common/http';
// import { Employee } from '../employee/Employee';
// import {LeaveType} from "../leaves/leavetype";
//
//
// @Component({
//   selector: 'app-add-leave',
//   templateUrl: './add-leave.component.html',
//   styleUrls: ['./add-leave.component.css']
// })
// export class AddLeaveComponent {
//   @Output() leaveAdded = new EventEmitter();
//
//   leaveForm!: FormGroup;
//   leaveTypes: LeaveType[] = [];
//   employees: Employee[] = [];
//
//   constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal, private http: HttpClient) {
//     this.leaveForm = this.formBuilder.group({
//       leaveDays: ['', Validators.required],
//       fromDate: ['', Validators.required],
//       toDate: ['', Validators.required],
//       note: ['', Validators.required],
//       leaveType: ['', Validators.required], // Ensure this form control is defined
//       employee: ['', Validators.required]   // Ensure this form control is defined
//     });
//   }
//
//
//   ngOnInit() {
//     this.loadLeaveTypes();
//     this.loadEmployees();
//   }
//
//   closeModal() {
//     this.activeModal.dismiss('Modal closed');
//   }
//
//   loadLeaveTypes() {
//     this.http.get<LeaveType[]>('http://localhost:8080/api/leaveTypes').subscribe(
//       res => {
//         this.leaveTypes = res;
//       },
//       error => {
//         console.error('Error loading leave types:', error);
//       }
//     );
//   }
//
//   loadEmployees() {
//     this.http.get<Employee[]>('http://localhost:8080/api/employees').subscribe(
//       res => {
//         this.employees = res;
//       },
//       error => {
//         console.error('Error loading employees:', error);
//       }
//     );
//   }
//
//   saveLeave() {
//     if (this.leaveForm.valid) {
//       const newLeave = this.leaveForm.value;
//       this.http.get('http://localhost:8080/api/leaves', newLeave).subscribe(
//         res => {
//           console.log('Leave added:', res);
//           this.leaveAdded.emit();
//           this.activeModal.close('Leave added');
//         },
//         error => {
//           console.error('Error adding leave:', error);
//         }
//       );
//     } else {
//       console.log('Form is invalid');
//     }
//   }
//
//   clearEmployeeSelection() {
//     const employeeControl = this.leaveForm.get('employee');
//     if (employeeControl) {
//       employeeControl.setValue('');
//     }
//   }
//
//   clearLeaveTypeSelection() {
//     const leaveTypeControl = this.leaveForm.get('leaveType');
//     if (leaveTypeControl) {
//       leaveTypeControl.setValue('');
//     }
//   }
//
// }
import {Component, OnInit, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee/Employee';
import {Leave} from "../leaves/Leaves";
import {Servicee} from "./servicee";

export class leavetype{
  idLeaveType?:number;
  nameLeaveType!: string;
}
@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.css']
})
export class AddLeaveComponent implements OnInit {
  @Input() leave: Leave | null = null;


  leaveForm!: FormGroup;
  leaves: Leave[] = [];
  leaveTypes: leavetype[] = [];
  employees: Employee[] = [];
  errorMessage: string = '';
  argument:any ;


  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal, private http: HttpClient,private servicee: Servicee) {
  }

  ngOnInit() {
    this.leaveForm = this.formBuilder.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      note: ['', Validators.required],
      leaveTypeId: ['', Validators.required],
      employeeId: ['', Validators.required]
    });
    this.loadLeaveTypes();
    this.loadEmployees();
  }




  closeModal() {
    this.activeModal.dismiss('Modal closed');
  }

  private addLeaveToTable(leave: any) {
    this.leaves.push(leave);

  }


  loadLeaveTypes() {
    this.http.get<any>('http://localhost:8080/api/leavesType').subscribe(
      res => {
        if (Array.isArray(res.returnField)) {
          this.leaveTypes = res.returnField;
        } else {
          console.error('leaves array not found in response:', res);
        }
      },
      error => {
        console.error('Error loading departments:', error);
      }
    );
  }

  loadEmployees() {

    this.http.get<any>('http://localhost:8080/api/employees').subscribe(
      res => {
        if (Array.isArray(res.returnField)) {
          this.employees = res.returnField;
        } else {
          console.error('leaves array not found in response:', res);
        }
      },
      error => {
        console.error('Error loading departments:', error);
      }
    );
  }


  saveLeave() {
    const leaveData = this.leaveForm.value;
    this.servicee.saveLeave(leaveData).subscribe(
      response => {
        console.log('Leave saved successfully:', response);
        this.closeModal();
        location.reload();
        // Handle any additional logic here
      },
      error => {
        console.error('Error saving leave:', error);
        // Handle error response here
      }

    );

  }




  clearEmployeeSelection() {
    const employeeControl = this.leaveForm.get('employeeId');
    if (employeeControl) {
      employeeControl.setValue('');
    }
  }

  clearLeaveTypeSelection() {
    const leaveTypeControl = this.leaveForm.get('leaveTypeId');
    if (leaveTypeControl) {
      leaveTypeControl.setValue('');
    }
  }


}
