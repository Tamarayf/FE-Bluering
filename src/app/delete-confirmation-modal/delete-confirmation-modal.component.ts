import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpClient} from "@angular/common/http";
import {Employee} from "../employee/Employee";

@Component({
  selector: 'app-delete-confirmation-modal',
  templateUrl: './delete-confirmation-modal.component.html',
  styleUrl: './delete-confirmation-modal.component.css'
})
export class DeleteConfirmationModalComponent {


  @Input() employeeToDelete!: Employee;

  constructor(private activeModal: NgbActiveModal) {}

  confirmDelete() {
    this.activeModal.close('delete');
  }

  closeModal() {
    this.activeModal.dismiss('cancel');
  }

}
