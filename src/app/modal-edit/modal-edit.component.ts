import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import {
  MatSelect
} from '@angular/material';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css']
})
export class ModalEditComponent {

  @Input()data: any;
  @Input()page: string;
  myForm: FormGroup;
  categories = [
    {
      id: 1,
      name: 'Өвчтөн'
    },
    {
      id: 2,
      name: 'Эмч'
    },
    {
      id: 3,
      name: 'Админ'
    },
    {
      id: 4,
      name: 'Менежэр'
    },
    {
      id: 5,
      name: 'Нягтлан'
    },
    {
      id: 6,
      name: 'Reception'
    }
  ];
  selected: any;
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
  editData() {
    this.activeModal.close(this.data);
  }
}