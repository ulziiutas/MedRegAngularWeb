import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.css']
})
export class ModalAddComponent {

  @Input()page: string;
  myForm: FormGroup;
  data: any= {};
  passord: string = "";

  units = [
    {
      id: "1",
      name: "SET"
    },
    {
      id: "2",
      name: "ширхэг"
    }
  ]

  constructor(
   public activeModal: NgbActiveModal,
   private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  private createForm() {
    this.myForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  closeModal() {
    this.activeModal.close("close");
  }
  addData() {
    this.activeModal.close(this.data);
  }
}