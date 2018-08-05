import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'modal-delete',
    templateUrl: './modal-delete.component.html'
})
export class ModalDeleteComponent {

  @Input()data: any;
  @Input()page: string;

  constructor(
   public activeModal: NgbActiveModal
  ) {
  }

  closeModal() {
    this.activeModal.close("close");
  }
  deleteUser() {
    this.activeModal.close(this.data);
  }
}